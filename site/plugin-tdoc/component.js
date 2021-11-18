import { transformSync } from '@babel/core';

export default (mdSegment, demoDefsStr, demoCodesDefsStr) => {
  const reactSource = `
    import React, { useEffect, useRef, useState } from 'react';\n
    import { useLocation } from 'react-router-dom';
    import Prismjs from 'prismjs';
    import 'prismjs/components/prism-bash.js';
    import 'prismjs/components/prism-javascript.js';
    import 'tdesign-site-components/lib/styles/prism-theme.less';
    import 'tdesign-site-components/lib/styles/prism-theme-dark.less';
    import Codesandbox from '@components/Codesandbox';
    ${demoDefsStr}
    ${demoCodesDefsStr}

    function useQuery() {
      return new URLSearchParams(useLocation().search);
    }

    export default function TdDoc(props) {
      const tdDocHeader = useRef();
      const tdDocTabs = useRef();
      const tdContributors = useRef();
      const { contributors, docType } = props;

      const isComponent  = ${mdSegment.isComponent};

      const location = useLocation();

      const query = useQuery();
      const [tab, setTab] = useState(query.get('tab') || 'demo');

      useEffect(() => {
        tdDocHeader.current.docType = docType;
        tdDocHeader.current.contributors = contributors;
        tdDocHeader.current.docInfo = { title: \`${mdSegment.title}\`, desc:  \`${mdSegment.description}\` }

        if (isComponent) {
          tdDocHeader.current.issueInfo = {};
          tdContributors.current.contributors = contributors;
        } else {
          Prismjs.highlightAll();
        }

        document.querySelector('td-doc-content').initAnchorHighlight();

        return () => {
          document.querySelector('td-doc-content').resetAnchorHighlight();
        };
      }, []);

      useEffect(() => {
        if (!isComponent) return;

        const query = new URLSearchParams(location.search);
        const currentTab = query.get('tab') || 'demo';
        setTab(currentTab);
        tdDocTabs.current.tab = currentTab;

        tdDocTabs.current.onchange = ({ detail: currentTab }) => {
          setTab(currentTab);
          const query = new URLSearchParams(location.search);
          if (query.get('tab') === currentTab) return;
          props.history.push({ search: '?tab=' + currentTab });
        }
      }, [location])

      function isShow(currentTab) {
        return currentTab === tab ? { display: 'block' } : { display: 'none' };
      }

      return (
        <>
          <td-doc-header slot="doc-header" ref={tdDocHeader}></td-doc-header>
          {
            isComponent ? (
              <>
                <td-doc-tabs ref={tdDocTabs} tab={tab}></td-doc-tabs>
                <div style={isShow('demo')} name="DEMO">
                  ${
                    mdSegment.demoMd
                      .replace(/class=/g, 'className=')
                      .replace(/tabindex/g, 'tabIndex')
                  }
                  <td-contributors-gpl ref={tdContributors}></td-contributors-gpl>
                </div>
                <div style={isShow('api')} name="API" dangerouslySetInnerHTML={{ __html: \`${mdSegment.apiMd}\` }}></div>
                <div style={isShow('design')} name="DESIGN" dangerouslySetInnerHTML={{ __html: \`${mdSegment.designMd}\` }}></div>
              </>
            ) : <div name="DOC">${mdSegment.docMd.replace(/class=/g, 'className=').replace(/tabindex/g, 'tabIndex')}</div>
          }
        </>
      )
    }
  `;

  const result = transformSync(reactSource, {
    babelrc: false,
    configFile: false,
    sourceMaps: true,
    generatorOpts: {
      decoratorsBeforeExport: true,
    },
    presets: [require('@babel/preset-react')],
  });

  return { code: result.code, map: result.map };
}

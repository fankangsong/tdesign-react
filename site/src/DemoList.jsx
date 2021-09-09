import React from 'react';
import { Link } from 'react-router-dom';

export const demoFiles = import.meta.globEager('../../src/**/_example/*.jsx');

const componentNames = [];
const demoPaths = Object.keys(demoFiles).map((key) => {
  const match = key.match(/([\w-]+)._example.([\w-]+).jsx/);
  const componentName = match[1];
  const demoName = match[2];
  componentNames.push(componentName);
  return `/react/demos/${componentName}/${demoName}`;
});

export default function DemoList(props) {
  const { location } = props;
  const match = location.pathname.match(/\/react\/demos\/([a-z-]+)/);
  let backPath = '/react/components';
  if (match && componentNames.indexOf(match[1]) > -1) {
    backPath = `/react/components/${match[1]}`;
  }
  const matchPaths = demoPaths.filter((path) => path.indexOf(location.pathname) > -1);
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 15 }}>
        <Link to={backPath}>返回</Link>
      </h1>
      {matchPaths.map((path) => (
        <div key={path}>
          <Link to={path}>{path}</Link>
        </div>
      ))}
    </div>
  );
}

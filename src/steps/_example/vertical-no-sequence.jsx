import React from 'react';
import { Steps } from '@tencent/tdesign-react';

const { StepItem } = Steps;

export default function HorizontalStepsWithNumbers() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Steps direction="vertical" theme="dot" current={1}>
        <StepItem title="已完成的步骤" content="这里是提示文字" />
        <StepItem title="进行中的步骤" content="这里是提示文字" />
        <StepItem title="未进行的步骤" content="这里是提示文字" />
        <StepItem title="未进行的步骤" content="这里是提示文字" />
      </Steps>
      <Steps direction="vertical" sequence="reverse" theme="dot" current={1}>
        <StepItem title="已完成的步骤" content="这里是提示文字" />
        <StepItem title="进行中的步骤" content="这里是提示文字" />
        <StepItem title="未进行的步骤" content="这里是提示文字" />
        <StepItem title="未进行的步骤" content="这里是提示文字" />
      </Steps>
    </div>
  );
}

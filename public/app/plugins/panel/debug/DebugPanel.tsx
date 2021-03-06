import React, { Component } from 'react';
import { PanelProps } from '@grafana/data';

import { DebugPanelOptions, DebugMode } from './types';
import { EventBusLoggerPanel } from './EventBusLogger';
import { RenderInfoViewer } from './RenderInfoViewer';
import { CursorView } from './CursorView';
import { StateView } from './StateView';

type Props = PanelProps<DebugPanelOptions>;

export class DebugPanel extends Component<Props> {
  render() {
    const { options } = this.props;

    switch (options.mode) {
      case DebugMode.Events:
        return <EventBusLoggerPanel eventBus={this.props.eventBus} />;
      case DebugMode.Cursor:
        return <CursorView eventBus={this.props.eventBus} />;
      case DebugMode.State:
        return <StateView {...this.props} />;
      case DebugMode.ThrowError:
        throw new Error('I failed you and for that i am deeply sorry');
      default:
        return <RenderInfoViewer {...this.props} />;
    }
  }
}

import { h } from 'preact';

import Cell from '../../cell';
import { BaseComponent, BaseProps } from '../base';
import className from '../../util/className';
import Config from '../../config';
import { TBodyCell } from '../../types';

import '../../theme/mermaid/td.scss';

export interface TDProps extends BaseProps {
  cell: Cell<TBodyCell>;
}

export class TD extends BaseComponent<TDProps, {}> {
  render() {
    return (
      <td className={className(Config.current.classNamePrefix, 'td')}>
        {this.props.cell.data}
      </td>
    );
  }
}
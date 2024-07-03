import { BreadcrumbItem } from '../../atoms/BreadcrumbItem';
import { BreadcrumbSeparator } from '../../atoms/BreadcrumbSeparator';

import * as Style from './style';

type Props = {
  items: string[];
};

const Breadcrumb = (props: Props) => {
  const { items } = props;

  return (
    <Style.BreadcrumbStyled>
      {
        items.map((item, index) => (
          <div key={index}>
            <BreadcrumbItem text={item} bold={index === (items.length - 1)} />
            {index < items.length - 1 && <BreadcrumbSeparator />}
          </div>
        ))
      }
    </Style.BreadcrumbStyled>
  )

};

export default Breadcrumb;
import * as Style from './style';

type Props = {
    text: string;
    bold: boolean;
};

const BreadcrumbItem = (props: Props) => {
    const { text, bold } = props;

    return <Style.BreadcrumbItemStyled $bold={bold}>{text}</Style.BreadcrumbItemStyled>

};

export default BreadcrumbItem;
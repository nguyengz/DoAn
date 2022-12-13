// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const product = {
    id: 'product',
    title: 'Product',
    type: 'group',
    children: [
        {
            id: 'util-ImP',
            title: 'Import product',
            type: 'item',
            url: '/Importproduct',
            icon: icons.FontSizeOutlined
        },
        {
            id: 'util-ExP',
            title: 'Export product',
            type: 'item',
            url: '/Exportproduct',
            icon: icons.BgColorsOutlined
        }
    ]
};

export default product;

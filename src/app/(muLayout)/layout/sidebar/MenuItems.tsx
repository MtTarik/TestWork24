import {IconHome, IconLayoutGrid, IconTable,} from "@tabler/icons-react";
import {uniqueId} from "lodash";

const Menuitems = [
    {
        id: uniqueId(),
        title: "Головна",
        icon: IconHome,
        href: "/",
    },
    {
        id: uniqueId(),
        title: "Тестувати форми",
        icon: IconTable,
        href: "/my-page/forms",
    },
    {
        id: uniqueId(),
        title: "Таблиці",
        icon: IconLayoutGrid,
        href: "/my-page/table",
    },
];

export default Menuitems;

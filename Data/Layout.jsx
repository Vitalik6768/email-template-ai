import { Columns2, Columns3, Columns4, RectangleHorizontal } from 'lucide-react'

export const Layout = [
    {
        label:'Column',
        type:'column',
        numberOfColumns:1,
        icon:RectangleHorizontal
    },
    {
        label:'Column ',
        type:'column-2',
        numberOfColumns:2,
        icon:Columns2
    },
    {
        label:'Column ',
        type:'column-3',
        numberOfColumns:3,
        icon:Columns3
    },
    {
        label:'Column ',
        type:'column-4',
        numberOfColumns:4,
        icon:Columns4
    },
]
import dayjs from 'dayjs'

const headers = [
  { text: '判明日', value: '判明日' },
  // { text: '居住地', value: '居住地' }, 不明のためコメントアウト
  { text: '年代', value: '年代' },
  { text: '性別', value: '性別' },
  // { text: '退院※', value: '退院', align: 'center' }, 不明のためコメントアウト
  { text: '備考', value: '備考' }
]

type DataType = {
  判明日: string
  // 居住地: string | null
  年代: string | null
  性別: '男性' | '女性' | string
  // 退院: '◯' | null
  備考: string | null
  [key: string]: any
}

type TableDataType = {
  判明日: string
  // 居住地: DataType['居住地']
  年代: DataType['年代']
  性別: DataType['性別'] | '不明'
  // 退院: DataType['退院']
  備考: DataType['備考']
}

type TableDateType = {
  headers: typeof headers
  datasets: TableDataType[]
}

/**
 * Format for DataTable component
 *
 * @param data - Raw data
 */
export default (data: DataType[]) => {
  const tableDate: TableDateType = {
    headers,
    datasets: []
  }
  data.forEach(d => {
    const TableRow: TableDataType = {
      判明日: dayjs(d['判明日']).format('MM/DD') ?? '不明',
      // 居住地: d['居住地'] ?? '不明',
      年代: d['年代'] ?? '不明',
      性別: d['性別'] ?? '不明',
      // 退院: d['退院'],
      備考: d['備考'] ?? 'なし'
    }
    tableDate.datasets.push(TableRow)
  })
  tableDate.datasets.sort((a, b) =>
    a.判明日 === b.判明日 ? 0 : a.判明日 < b.判明日 ? 1 : -1
  )
  return tableDate
}

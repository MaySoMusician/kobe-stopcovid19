type DataType = {
  attr: '患者発生総数'
  value: number
  children: [
    {
      attr: '調査済患者総数'
      value: number
      children: [
        {
          attr: '入院中'
          value: number
          children: [
            {
              attr: '軽症・中等症'
              value: number
            },
            {
              attr: '重症'
              value: number
            }
          ]
        },
        {
          attr: '死亡'
          value: number
        },
        {
          attr: '治癒確認'
          value: number
        }
      ]
    }
  ]
}

type ConfirmedCasesType = {
  患者発生総数: number
  調査済患者総数: number
  入院中: number
  軽症中等症: number
  重症: number
  治癒確認: number
  死亡: number
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType) => {
  const formattedData: ConfirmedCasesType = {
    患者発生総数: data.value,
    調査済患者総数: data.children[0].value,
    入院中: data.children[0].children[0].value,
    軽症中等症: data.children[0].children[0].children[0].value,
    重症: data.children[0].children[0].children[1].value,
    死亡: data.children[0].children[1].value,
    治癒確認: data.children[0].children[2].value
  }
  return formattedData
}

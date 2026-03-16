import { useEffect, useState } from 'react'

const withData = (WrappedCmp: React.ComponentType<any>, url: string, Loader = <p>Loading...</p>) => {
  const WithData = (props: any) => {
    const [data, setData] = useState(null)
    const [cargandoDatos, setCargandoDatos] = useState(true)

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(url)
        const datos = await response.json()

        setTimeout(() => {
          setData(datos)
          setCargandoDatos(false)
        }, 1400)
      }

      fetchData()
    }, [])

    return (
      <>
        {cargandoDatos ? Loader : <WrappedCmp {...props} data={data} />}
      </>
    )
  }

  return WithData
}

export default withData
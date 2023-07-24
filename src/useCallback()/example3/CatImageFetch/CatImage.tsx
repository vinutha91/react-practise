import { useEffect, useState } from "react"
import { Spinner } from "../Spinner"

const DELAY_TIME = 1000
const imageFetch = async (url : string) => {
    const response = await fetch(url)
    return response.json()
  }
export const CatImage = ({ params } : any) =>{
    const [catImage, setCatImage] = useState(null)
    const [loading, setLoading] = useState(true)
    const breed = params()

    useEffect(() => {
        setLoading(true)
        imageFetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`)
          .then((res) =>
            setTimeout(() => {
              setCatImage(res[0].url)
              setLoading(false)
            }, DELAY_TIME)
          )
          .catch(() => setLoading(false))
      }, [params])

      return loading ? <Spinner /> : <div>
          {
              catImage && <img src={catImage} alt="cat" />
          }
      </div>
}
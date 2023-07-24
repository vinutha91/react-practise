import { useState } from "react"
import { ImageFetch } from "./ImageFetch"
import { OptimizedImageFetch } from "./OptimizedImageFetch"

export const CatImageFetch = () =>{
    const [optimized, setOptimized] = useState(false)
    return (
        <div>
             <h2 className="card-title">Referential Equality</h2>
             <label
              className="label cursor-pointer flex justify-start"
              htmlFor="optimized"
            >
              <span className="label-text mr-2">Optimized</span>
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                name="optimized"
                checked={optimized}
                onChange={(e) => setOptimized(e.target.checked)}
              />
            </label>
            {optimized ? <OptimizedImageFetch /> : <ImageFetch />}
        </div>
    )
}
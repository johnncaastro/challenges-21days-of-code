import { useEffect, useState } from "react";
import { api } from "./services/api";

import './styles/home.scss';

interface Photos {
  id: string,
  urls: {
    small: string,
  }
}

export function App() {
  const [photos, setPhotos] = useState<Photos[]>([]);

  useEffect(() => {
    api.get('photos/random?count=20&client_id=G_O3MOvOncax5SHLOwN2fi2RTo4Alhcb1brYHazzH5I')
      .then(response => setPhotos(response.data))
  }, [])

  return (
    <div className="container">
      {photos.map(photo => (
        <img key={photo.id} src={photo.urls.small} />
      ))}
    </div>
  )
}

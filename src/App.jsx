import Axios from 'axios';
import React, { useState } from 'react'
import { domain, header } from './env';

const App = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const senData = async () => {
    let formdata = new FormData()
    formdata.append('title', title)
    if (image != null) {
      formdata.append('image', image)
    }
    await Axios({
      method: "post",
      url: `${domain}/api/post/`,
      headers: header,
      data: formdata
    }).then((res) => {
      console.log(res);
    })
  }
  return (
    <div className="container">
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={senData}>Sendata</button>
    </div>
  )
}

export default App

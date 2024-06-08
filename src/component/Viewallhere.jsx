import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Viewallhere = () => {
  const [pic,changepic] = useState([])

  const fetchData=()=>{
    axios.get("https://jsonplaceholder.typicode.com/photos").then(
      (response)=>{
        console.log(response.data)
        changepic(response.data)
      }
    ).catch().finally()
  }
  useEffect(()=>{fetchData()},[])
  return (
    <div>
      <div className="container">
        <div className="row">
          <col className=" col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
          <div className="row g-3">
            {
              pic.map(
                (value, index) => {
                  return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                    <div class="card" >
                      <img src={value.url} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">{value.albumId}</h5>
                          <p class="card-text">{value.title}</p>
                          <a href="#" class="btn btn-primary">{value.id}</a>
                        </div>
                    </div>
                  </div>

                }
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Viewallhere;

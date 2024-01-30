function Card(props) {
  console.log(props)

    return (
        <>
          <div className="card">
            <h2>Fry</h2>
            
            <div className="tags"></div>
              <div className="tag"> Status: Vivo</div>
              <div className="tag"> Espécie: Humana</div>
              <div className="tag"> Origem: Terra</div>
            </div>

            <img src="{item.img}" />
          </div>
        </>
    )
}

export default Card
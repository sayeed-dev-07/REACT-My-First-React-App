function Card({children}){
    return (
        <div className="card">
            {children}
        </div>
    )
}

export default function Profile2() {
  return (

      <Card>
        <div className="card-content">
          <h1>Photo</h1>
          <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={70}
            height={70}
          />
          <div className="card-content">
          <h1>About</h1>
          <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
        </div>
        </div>
      </Card>
      
  );
}

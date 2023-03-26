import "./kisi.css"

function Kisi({veri}) {
    let dogumTarihi = new Date(veri.dob.date).getFullYear()

    return (
        <div className=" col-md-2 kisi-kart">
            <img src={veri.picture.medium} alt="" />
            <p>{veri.name.first} {veri.name.last}</p>
            <p>{dogumTarihi}</p>
        </div>
    )
}

export default Kisi
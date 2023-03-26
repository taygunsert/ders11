import kisiler from './veri'
import Kisi from './Kisi'

function KisiListe() {
    //let arananKisi = kisiler.find( eleman=>eleman.name.first === "Miriam"  )

    let kadinVarmi = kisiler.some( eleman=>eleman.gender === "female" )

    let dogumKosulu = kisiler.every( eleman=> { 
                let yil = new Date(eleman.dob.date).getFullYear()
                return yil > 1950
            })

    let kadinlar = kisiler.filter( eleman=>eleman.gender === "female" )
    let erkekler = kisiler.filter( eleman=>eleman.gender === "male" )

    return (
        <>
            <div className='row'>
                {dogumKosulu ? <p>Tüm üyeler 1950'den büyük.</p> : <p>En az 1 kişi 1950'den küçük</p>}
                {kadinVarmi ? <p>En az 1 kadın üye mevcut</p> : <p>Hiç kadın üye yok.</p>}
                {kadinlar.map( (kisi, index)=>{ return <Kisi veri={kisi} key={index} /> } ) }
                {erkekler.map( (kisi, index)=>{ return <Kisi veri={kisi} key={index} /> } ) }
            </div>
        </>
    )
}


export default KisiListe
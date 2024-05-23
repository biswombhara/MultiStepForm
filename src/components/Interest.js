export default function Interest(){
    let checkBox = [
        {
            img:"https://media.tenor.com/H2v8kjkZIsgAAAAi/chart-increasing-objects.gif",
            text:"Learning specific skills to advance my career",
            id:"one"
        },
        {
            img:"https://static01.nyt.com/images/2016/05/03/world/what-in-the-world/WITW-PROMO/WITW-PROMO-videoSixteenByNineJumbo1600.jpg",
            text:"Exploring new topics I'm interested in",
            id:"two"
        },
        {
            img:"https://i.pinimg.com/736x/7c/6a/f5/7c6af5fa969913dd659402aa98c27db9.jpg",
            text:"Refreshing my math foundations",
            id:"three"
        },
        {
            img:"https://st.depositphotos.com/1868917/3052/v/950/depositphotos_30527377-stock-illustration-arrow-in-target.jpg",
            text:"Exercising my brain to stay sharp",
            id:"four"
        },
        {
            img:"https://cdn.imgbin.com/4/21/16/imgbin-computer-icons-masked-TziVdZCKcKCB9R3RNauHAjjrv.jpg",
            text:"Something else",
            id:"five"
        },
    ]
    return <>
        <h1 className="text-3xl text-center max-sm:text-2xl"><b>Which are you most interested in?</b></h1>
        <p className="my-4 max-sm:text-center max-sm:text-sm">Choose just one. This will help us get you started (but won't limit your experience).</p>
        <form>
            {
                checkBox.map((el)=>(
                    <div className="check-box">
                        <img className="list-icon" src={el.img}></img>
                        <input type="radio" className="hidden" id={el.id} name="interest" />
                        <label for={el.id}>{el.text}</label>
                    </div>
                ))
            }
        </form>
    </>
}
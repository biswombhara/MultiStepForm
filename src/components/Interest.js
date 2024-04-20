export default function Interest(){
    return <>
        <h1 className="text-3xl font-bold">Which are you most interested in?</h1>
        <p className="mb-8 mt-6">Choose just one. This will help us get you started (but won't limit your experience).</p>
        <form>
            <div className="check-box">
                <img className="list-icon" src="https://media.tenor.com/H2v8kjkZIsgAAAAi/chart-increasing-objects.gif"></img>
                <input type="radio" className="hidden" id="one" name="interest" />
                <label for="one">Learning specific skills to advance my career</label>
            </div>
            <div className="check-box">
                <img className="list-icon" src="https://static01.nyt.com/images/2016/05/03/world/what-in-the-world/WITW-PROMO/WITW-PROMO-videoSixteenByNineJumbo1600.jpg"></img>
                <input type="radio" className="hidden" id="two" name="interest" />
                <label for="two">Exploring new topics I'm interested in</label>
            </div>
            <div className="check-box">
                <img className="list-icon" src="https://i.pinimg.com/736x/7c/6a/f5/7c6af5fa969913dd659402aa98c27db9.jpg"></img>
                <input type="radio" className="hidden" id="three" name="interest" />
                <label for="three">Refreshing my math foundations</label>
            </div>
            <div className="check-box">
                <img className="list-icon" src="https://st.depositphotos.com/1868917/3052/v/950/depositphotos_30527377-stock-illustration-arrow-in-target.jpg"></img>
                <input type="radio" className="hidden" id="four" name="interest" />
                <label for="four">Exercising my brain to stay sharp</label>
            </div>
            <div className="check-box">
                <img className="list-icon" src="https://cdn.imgbin.com/4/21/16/imgbin-computer-icons-masked-TziVdZCKcKCB9R3RNauHAjjrv.jpg"></img>
                <input type="radio" className="hidden" id="five" name="interest" />
                <label for="five">Something else</label>
            </div>
        </form>
    </>
}
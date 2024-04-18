export default function Interest(){
    return <>
        <h1 className="text-3xl font-bold">Which are you most interested in?</h1>
        <p className="mb-8">Choose just one. This will help us get you started (but won't limit your experience).</p>
        <form>
            <div className="p-4 rounded-md outline-black border hover:border-orange-300 shadow-md my-2">
                <input type="radio" id="one" name="interest" />
               experience <label for="one">Learning specific skills to advance my career</label>
            </div>
            <div className="p-4 rounded-md outline-black border hover:border-orange-300 shadow-md my-2">
                <input type="radio" id="two" name="interest" />
                <label for="two">Exploring new topics I'm interested in</label>
            </div>
            <div className="p-4 rounded-md outline-black border hover:border-orange-300 shadow-md my-2">
                <input type="radio" id="three" name="interest" />
                <label for="three">Refreshing my math foundations</label>
            </div>
            <div className="p-4 rounded-md outline-black border hover:border-orange-300 shadow-md my-2">
                <input type="radio" id="four" name="interest" />
                <label for="four">Exercising my brain to stay sharp</label>
            </div>
            <div className="p-4 rounded-md outline-black border hover:border-orange-300 shadow-md my-2">
                <input type="radio" id="five" name="interest" />
                <label for="five">Something else</label>
            </div>
        </form>
    </>
}
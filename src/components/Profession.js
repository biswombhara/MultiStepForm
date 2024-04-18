export default function Profession(){
    return <>
        <h1 className="text-3xl"><b>Which describes you best?</b></h1>
        <p className="mb-8">This will help us get you personalize your experience.</p>
        <form>
            <div className="p-4 rounded-md outline-black border hover:border-orange-300 shadow-md my-2">
                <input type="radio" className="hidden" id="one" name="experience" />
                <img className="mr-6 max-w-10 inline" src="https://p7.hiclipart.com/preview/870/186/470/5bbbfe6de4e2c.jpg"></img>
                <label for="one">Student <span>or soon to be enrolled</span></label>
            </div>
            <div className="p-4 rounded-md outline-black border hover:border-orange-300 shadow-md my-2">
                <input type="radio" id="two" name="experience" />
                <label for="two">Professional <span>pursuing a career</span></label>
            </div>
            <div className="p-4 rounded-md outline-black border hover:border-orange-300 shadow-md my-2">
                <input type="radio" id="three" name="experience" />
                <label for="three">Parent <span>of a school-age child</span></label>
            </div>
            <div className="p-4 rounded-md outline-black border hover:border-orange-300 shadow-md my-2">
                <input type="radio" id="four" name="experience" />
                <label for="four">Lifelong learner</label>
            </div>
            <div className="p-4 rounded-md outline-black border hover:border-orange-300 shadow-md my-2">
                <input type="radio" id="five" name="experience" />
                <label for="five">Teacher</label>
            </div>
            <div className="p-4 rounded-md outline-black border hover:border-orange-300 shadow-md my-2">
                <input type="radio" id="five" name="experience" />
                <label for="five">Other</label>
            </div>
        </form>
    </>
}
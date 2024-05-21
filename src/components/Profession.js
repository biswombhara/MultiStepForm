export default function Profession(){
    return <>
        <h1 className="text-3xl text-center max-sm:text-2xl"><b>Which describes you best?</b></h1>
        <p className="my-4 max-sm:text-center max-sm:text-sm">This will help us get you personalize your experience.</p>
        <form className="max-sm:my-[-0.8rem]">
            <div className="check-box">
                <img className="list-icon" src="https://cdn4.iconfinder.com/data/icons/professions-bzzricon-flat/512/25_Student-512.png"></img>
                <input type="radio" className="hidden" id="one" name="experience" />
                <label for="one">Student <span>or soon to be enrolled</span></label>
            </div>
            <div className="check-box">
                <img className="list-icon" src="https://t3.ftcdn.net/jpg/06/17/13/26/240_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg"></img>
                <input type="radio" className="hidden" id="two" name="experience" />
                <label for="two">Professional <span>pursuing a career</span></label>
            </div>
            <div className="check-box">
                <img className="list-icon" src="https://nofiredrills.com/wp-content/uploads/2016/10/myavatar.png"></img>
                <input type="radio" className="hidden" id="three" name="experience" />
                <label for="three">Parent <span>of a school-age child</span></label>
            </div>
            <div className="check-box">
                <img className="list-icon" src="https://static.vecteezy.com/system/resources/previews/021/770/056/non_2x/avatar-of-a-student-character-free-vector.jpg"></img>
                <input type="radio" className="hidden" id="four" name="experience" />
                <label for="four">Lifelong learner</label>
            </div>
            <div className="check-box">
                <img className="list-icon" src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-man-avatar-icon-professional-man-character-png-image_4356027.jpg"></img>
                <input type="radio" className="hidden" id="five" name="experience" />
                <label for="five">Teacher</label>
            </div>
            <div className="check-box">
                <img className="list-icon" src="https://i.pinimg.com/originals/cf/ad/6f/cfad6f938af0aec9c9cb4b3214dea18b.jpg"></img>
                <input type="radio" className="hidden" id="five" name="experience" />
                <label for="five">Other</label>
            </div>
        </form>
    </>
}
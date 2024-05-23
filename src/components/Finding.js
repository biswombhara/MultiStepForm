import { Vortex } from 'react-loader-spinner';
export default function Finding(){
    return     <>
        <div className="flex h-screen justify-center flex-col items-center">
        <Vortex  visible={true} height="80" width="80" ariaLabel="vortex-loading" wrapperStyle={{}}  wrapperClass="vortex-wrapper" colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}/>
            <h1 className="text-2xl text-center"><b>Finding learning path recommendations for you based on <br></br> your responses</b><i className="fa-solid fa-ellipsis fa-fade relative inset-y-1.5 left-1"></i></h1>
        </div>
    </>
}
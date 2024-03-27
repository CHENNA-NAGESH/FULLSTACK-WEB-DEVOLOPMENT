import './style.css';
import Img1 from './images/Competetive-Coding-banner.png'
export default function Component4(){
    return(
        <div className='div16'>
            <center>
                <h4 className='h'>Our Learning Paths</h4>
                <div className='div17'>
                    <span className='sp1'><u>Competitive coding</u></span>
                    <span className='sp2'>T-shaped Engineer</span>
                    <span className='sp2'>Drive ready</span>
                </div>
            </center>
            <div className='div18'>
                <div className='div19'>
                    <img src={Img1} alt='banner'></img>
                </div>
                <div className='div19'>
                    <h1 className='h01'>01</h1>
                    <h3 className='h22'>Competitive Coding</h3>
                    <div className='div20'>Technical Hub organizes various trainings and skill enhancement programs that focuses on keeping individuals up to date on various kinds of technology. These program grants everyone a chance to widen their knowledge and skills in various ways.</div>
                    <div className='div21'>VIEW</div>
                </div>
            </div>
        </div>
    );
}
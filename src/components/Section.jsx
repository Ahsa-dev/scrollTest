import React from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import seriesData from '../resources/improvingLives.json';
class Section extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            scroll: null,
            data: null,
        }
    }
    
    componentDidMount(){
        const scroll = new LocomotiveScroll({
            el: document.querySelector(".data-scroll-container"),
            smooth: true,
            //direction: 'vertical',
            //repeat: true,
            //getDirection: true,
            //getSpeed: true,
            //multiplier: 1,
            //gestureDirection: 'horizontal',
        });
        window.addEventListener("resize", () => {});
        this.setState({
            data: seriesData.sections,
            scroll: scroll
        },()=>{console.log(this.state.data)});
    }
    componentWillUnmount() {
        this.state.scroll.destroy();
        this.setState({
            scroll: null,
        });
    }
    render() {
        return (
            <>
                <div className="data-scroll-container">
                    <div data-scroll-section style={{width: '100%',height:'1000px'}}>
                        <h2 data-scroll data-scroll-speed="1">What's up?</h2>
                        <p data-scroll data-scroll-speed="3" data-scroll-direction="horizontal">😬</p>
                    </div>  
                    { this.state.data !== null && this.state.data.map((section)=>{
                        
                        return(
                            <section data-scroll-section style={{height: '500px',width: '100%',backgroundColor: section.background.color}}>
                                {section.content.map((content)=>{
                                    switch (content.type){
                                        case 'text':
                                            return(
                                                <div 
                                                    className={content.position.desktop.horizontal+' '+content.position.desktop.vertical} 
                                                    style={{fontSize: content.fontSize,color:content.style.background}}
                                                >
                                                    {content.body}
                                                </div>
                                            );
                                        case 'image':
                                            return(
                                                <img 
                                                    className={content.position.desktop.horizontal+' '+content.position.desktop.vertical} 
                                                    style={{width: content.size}}
                                                    src={content.src}
                                                    data-scroll data-scroll-speed={4}
                                                    data-scroll-direction={content.animation==='scroll-vertical'?'vertical':'horizontal'}
                                                />
                                            );
                                        default:
                                            break;
                                    }
                                    
                                })}
                            </section>
                        )
                    })}
                    <div data-scroll-section style={{width: '100%',height:'1000px'}}>
                        <h2 data-scroll data-scroll-speed="1">What's up?</h2>
                        <p data-scroll data-scroll-speed="3" data-scroll-direction="horizontal">😬</p>
                    </div>
                </div>
            </>
        );
    }
}

export default Section;
import React from 'react';

const List = ({ projects }) => {
    return (
        <>
            {projects.map((project) => {
                const { id, name, desc, image, projectlink } = project;
                
                return (
                    <div className='person'>

                        <div className='projecthead'>
                            <img src={image} alt="" />
                            <h2 key={id} >{name}</h2>
                        </div>
                        <div>

                            <p>{desc}</p>
                        </div>
                        
                        <button className='btn' onClick={()=>{
                            console.log({projectlink});
                               
                              window.open(projectlink);
                        }}> View Projects </button>
                           
                       
                            
                            
                        
                        
                    </div>
                );
            })}



        </>
    );
};

export default List;
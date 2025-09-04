import { animate, createScope, createSpring, createDraggable } from 'animejs';
import { useEffect, useRef, useState } from 'react';


function Sun() {
    const root = useRef(null);
    const scope = useRef(null);

    useEffect(() => {

        scope.current = createScope({ root }).add( self => {

            // Every anime.js instances declared here are now scopped to <div ref={root}>

            // Created a bounce animation loop
            animate('.logo', {
                scale: [
                    { to: 1.25, ease: 'inOut(3)', duration: 200 },
                    { to: 1, ease: createSpring({ stiffness: 300 }) }
                ],
                loop: true,
                loopDelay: 250,
            });

            // Make the logo draggable around its center
            createDraggable('.logo', {
                container: [0, 0, 0, 0],
                releaseEase: createSpring({ stiffness: 200 })
            });

            // Register function methods to be used outside the useEffect
            self.add('rotateLogo', (i) => {
                animate('.logo', {
                    rotate: i * 360,
                    ease: 'out(4)',
                    duration: 1500,
                });
            });

        });

        // Properly cleanup all anime.js instances declared inside the scope
        return () => scope.current.revert()

    }, []);



    return (
        <section id={'sun'}>
            <div className="large centered row">
                <img src='/images/topsun.png' className="logo react" alt="React logo" />
            </div>
        </section>
    )
}

export default Sun;
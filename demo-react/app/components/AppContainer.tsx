import * as React from "react";
import {swarm} from './swarm';
import 'nativescript-canvas-plugin/react';

export default function Greeting({}) {
    return (
        <gridLayout
            width={"100%"}
            height={"100%"}
        >
            <tnsCanvas width={"100%"}
                       height={"100%"}
                       onReady={(args: any) => {
                           const canvas = args.object;
                           swarm(canvas);
                       }}/>
        </gridLayout>
    );
}

import React, { Children, Suspense } from 'react';
import { createBrowserRouter } from "react-router-dom";
import HomePage from './component/Homepage';
// import About from './component/About';
import Contact from './component/contact';
import Leftbtn from './component/Leftbtn';
import Middelbtn from './component/Middelbtn';
import Rightbtn from './component/Rightbtn';
import Meet from './component/Meet';
import Loading from './comcomponent/Loading'
// import Example from './component/Example';
import FunctionComponent from './component/Functioncomponent';
import ClassComponent from './component/ClassComponent'
import Usestate from './Function Component/Usestate';
import Todolist from './Function Component/Todolist';
import Apifatching1 from './Function Component/Apifatching1';
import Apifatching2 from './Function Component/Apifatching2';
// import Apiimg from './Function Component/Apiimg';
import Usememo from './Function Component/Usememo';
import ClassCompoIntro from './classcomponent/Classcomintro';
import Constructor from './classcomponent/Constructor';
import Jsx from './classcomponent/Jsx';
import Props from './classcomponent/Props';
import State from './classcomponent/State';
import LifeCycle from './classcomponent/Lifecycle';
import ConditionalRendaring from './classcomponent/ConditionalRendaring';
import ListKeys from './classcomponent/ListKeys';
import ControlledCompo from './classcomponent/ControlledCompo';
import UncontrolledCompo from './classcomponent/UncontrolledCompo';
import CompositionVsInheritance from './classcomponent/CompositionVsInheritance';
import StateChild from './classcomponent/StateChild';
import StateLifting from './classcomponent/StateLifting';
import Array from './classcomponent/Array';
import Practice from './Practice';
import Pclasscomponent from './Practice/classcomponent/Pclasscomponent';
import PfunctionComponent from './Practice/PfunctionComponent';
import Pusestate from './Practice/pfunctioncomponent/Pusestate';
import Tudulist from './component/Meet';


const Examplelazy = React.lazy(() => import('./component/About'))
const Examplelazys = React.lazy(() => import('./component/Example'))
const Examplelazyz = React.lazy(() => import('./Function Component/Apiimg'))
const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/about",
        element: <Suspense fallback={<h1>loading......</h1>}><Examplelazy /></Suspense>
    },
    {
        path: "contact/*",
        element: <Contact />,
        children: [{
            path: "Leftbtn/*",
            element: <Leftbtn />,
            children: [
                {
                    path: "Meet",
                    element: <Meet />
                }
            ]
        },
        {
            path: "middelbtn",
            element: <Middelbtn />
        },
        {
            path: "Rightbtn",
            element: <Rightbtn />
        }]
    },
    {
        path: "Example",
        element: <Suspense fallback={<Loading />}><Examplelazys /></Suspense>,
        children: [
            {
                path: "Functioncomponent",
                element: <FunctionComponent />,
                children: [
                    {
                        path: "Usestate",
                        element: <Usestate />,
                    },
                    {
                        path: "Apifatching1",
                        element: <Apifatching1 />
                    },
                    {
                        path: "Apifatching2",
                        element: <Apifatching2 />
                    },
                    {
                        path: "Apiimg",
                        element: <Suspense fallback={<h2>ruko jara sabar kro</h2>}><Examplelazyz /></Suspense>
                    },
                    {
                        path: "Usememo",
                        element: <Usememo />
                    },
                    {
                        path: "Tudulist",
                        element: <Tudulist />
                    }
                ]
            },
            {
                path: "ClassComponent",
                element: <ClassComponent />,
                children: [
                    {
                        path: "Classcomintro",
                        element: <ClassCompoIntro />
                    },
                    {
                        path: "Constructor",
                        element: <Constructor />
                    },
                    {
                        path: "Jsx",
                        element: <Jsx />
                    },
                    {
                        path: "Props",
                        element: <Props />
                    },
                    {
                        path: "State",
                        element: <State />
                    },
                    {
                        path: "LifeCycle",
                        element: <LifeCycle />
                    },
                    {
                        path: "ConditionalRendaring",
                        element: <ConditionalRendaring />
                    },
                    {
                        path: "ListKeys",
                        element: <ListKeys />
                    },
                    {
                        path: "ControlledCompo",
                        element: <ControlledCompo />
                    },
                    {
                        path: "UncontrolledCompo",
                        element: <UncontrolledCompo />
                    },
                    {
                        path: "CompositionVsInheritance",
                        element: <CompositionVsInheritance />
                    },
                    {
                        path: "StateChild",
                        element: <StateChild />
                    },
                    {
                        path: "StateLifting",
                        element: <StateLifting />
                    },
                    {
                        path: "Array",
                        element: <Array />
                    },
                ]
            }
        ]
    },
    {
        path: "Practice",
        element: <Practice />,
        children: [
            {
                path: "Pclasscomponent",
                element: <Pclasscomponent />
            },
            {
                path: "PfunctionComponent",
                element: <PfunctionComponent />,
                children: [
                    {
                        path: "Pusestate",
                        element: <Pusestate />
                    }
                ]
            }
        ]

    }

])

export default MainRoutes;
import HomePage from "src/pages/Home"
import FollowingPage from "src/pages/Following"
import ProfilePage from "src/pages/Profile"
import UploadPage from "src/pages/Upload"
import { HeadOnlyLayout } from "src/Components/Layout"
import SearchPage from "src/pages/Search"

const publicRoutes = [
    {
        path : "/",
        component : HomePage
    },
    {
        path : "/following",
        component : FollowingPage
    },
    {
        path : "/upload",
        component : UploadPage,
        layout : HeadOnlyLayout
    },
    {
        path : "/search",
        component : SearchPage,
        layout : null
    },
    {
        path : '/:nickname',
        component : ProfilePage
    }
]
const privateRoutes = []

export {privateRoutes,publicRoutes}
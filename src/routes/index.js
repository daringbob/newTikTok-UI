import HomePage from "src/pages/Home"
import FollowingPage from "src/pages/Following"
import ProfilePage from "src/pages/Profile"
import UploadPage from "src/pages/Upload"
import { HeadOnlyLayout } from "src/layouts"
import SearchPage from "src/pages/Search"
import config from "src/Components/config"

import LivePage from "src/pages/Live"

const publicRoutes = [
    {
        path : config.routes.home,
        component : HomePage
    },
    {
        path : config.routes.following,
        component : FollowingPage
    },
    {
        path : config.routes.upload,
        component : UploadPage,
        layout : HeadOnlyLayout
    },
    {
        path : config.routes.live,
        component : LivePage
    },
    {
        path : config.routes.search,
        component : SearchPage
    },
    {
        path : config.routes.profile,
        component : ProfilePage
    }
]
const privateRoutes = []

export {privateRoutes,publicRoutes}
import HomePage from "src/pages/Home"
import FollowingPage from "src/pages/Following"
import ProfilePage from "src/pages/Profile"
import UploadPage from "src/pages/Upload"
import { HeadOnlyLayout } from "src/layouts"
import SearchPage from "src/pages/Search"
import routes from "src/Components/config/routes"

const publicRoutes = [
    {
        path : routes.home,
        component : HomePage
    },
    {
        path : routes.following,
        component : FollowingPage
    },
    {
        path : routes.upload,
        component : UploadPage,
        layout : HeadOnlyLayout
    },
    {
        path : routes.search,
        component : SearchPage,
        layout : null
    },
    {
        path : routes.profile,
        component : ProfilePage
    }
]
const privateRoutes = []

export {privateRoutes,publicRoutes}
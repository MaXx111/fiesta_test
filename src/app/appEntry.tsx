import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import store, { persistor } from './appStore'
import { PersistGate } from 'redux-persist/integration/react'
import { RouterProvider } from 'react-router-dom'
import { router } from './appRouter'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router} fallbackElement={<p>Loading...</p>}/>
        </PersistGate>

    </ReduxProvider>
)
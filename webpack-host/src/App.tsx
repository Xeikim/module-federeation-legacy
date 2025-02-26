import React, { Suspense, useEffect, useState } from 'react';
import { init, loadRemote } from '@module-federation/enhanced/runtime'

const App = () => {
  const [RemoteButton, setRemoteButton] = useState<React.JSX.Element | null>(null)
  useEffect(() => {
    const loadComponent = async () => {
      await init({
        name: 'host_app',
        remotes: [{
          name: 'remote',
          entry: 'http://localhost:8888/mf-manifest.json',
          type: 'module'
        }],
      })
      // @ts-ignore
      const { default: RemoteButton} = await loadRemote('remote')
      setRemoteButton(RemoteButton as React.JSX.Element)
    }
    loadComponent()
  }, [])
  const a = <h1>Webpack Host App</h1>

  return (
    <div>
      <h1>Webpack Host App</h1>
      <Suspense fallback="Loading Button...">
        {RemoteButton}
      </Suspense>
    </div>
  );
};

export default App;

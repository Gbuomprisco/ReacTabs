# ReacTabs
Basic example of Bootstrap tabs made with React

## Running the example

Download React dependency via npm:
    
    npm install
   
Afterwards just run ReacTabs/index.html

## Basic usage example
    
    // jsx
    
    var Tabs = ReacTabs.Tabs,
        TabItem =  ReacTabs.TabItem;

    var app = (
        <div role="tabpanel">
            <Tabs>
                <TabItem href='home' label='Home' active>
                    My Text on home 
                </TabItem>
                <TabItem href='login' label='Login'>
                     My Text on login
                </TabItem>
            </Tabs>
        </div>
    );

    React.render(
        app, document.getElementById('tabs-container')
    );
    
    // html
    
    <div id='#tabs-container'></div>

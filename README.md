# ReacTabs
Basic example of Bootstrap tabs made with React

## Installation

Install React via npm:
    
    npm install
   
Afterwards just run index.html

## Basic example
    
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

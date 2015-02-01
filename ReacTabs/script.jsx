/**
    - @ReacTabs
    - React component to creat Bootstrap tabs
    - coded by Giancarlo Buomprisco

    - usage
    ** var app = (
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
    */

var ReacTabs = {};

(function () {
    "use strict";

     /**
    ** helpers
    */

    var 
        addClass = function (element, className) {
            element.className = element.className + " " + className;
        },
        removeClass = function (element, className) {
            element.className = element.className.replace(className, '').trim();
        };


    /**
    ** React classes
    */
    var Tabs = React.createClass({
        getDefaultProps: function () {
            return {
                animate: true,
                animationDuration: 450
            }
        },
        render: function () {
            var props = this.props,
                tabs = props.children;

            return (
                <div>
                    <ul className="nav nav-tabs" role="tablist">
                        {tabs}
                    </ul>
                    
                    <TabsContent>
                        {tabs.map(function(tab) {
                            return <TabContent 
                                            id={tab.props.href} 
                                            active={tab.props.active}>
                                        {tab.props.children}
                                    </TabContent>
                        })}
                     </TabsContent>
                 </div>
            );
        }
    }),

        TabItem = React.createClass({
            getDefaultProps: function () {
                return {
                    active: false
                }
            },
            disableActiveTab: function () {
                var currentTabElement = document.querySelector('.nav-tabs li.active > a'),
                    contentId = currentTabElement.getAttribute('href'),
                    currentTabContentElement = document.getElementById(contentId);
                
                removeClass(currentTabElement.parentNode, "active");
                removeClass(currentTabContentElement, "active");
            },
            enableActiveTab: function(tab) {
                var id = tab.getAttribute('href'),
                    tabContentElement = document.getElementById(id);

                addClass(tabContentElement, "active");
                addClass(tab.parentNode, "active");
            },
            switchTab: function (e) {
                e.preventDefault();
                if (e.target.className.match("active") !== null) {
                    return false;
                }
                this.disableActiveTab();
                this.enableActiveTab(e.target);
            },
            render: function () {
                return (<li role="presentation" className={this.props.active ? "active": ""}>
                            <a href={this.props.href} onClick={this.switchTab}>{this.props.label}</a>
                        </li>);
            }
        }),

        TabsContent = React.createClass({
            render: function () {
                return (<div className="tab-content">{this.props.children}</div>);
            }
        }),

        TabContent = React.createClass({
            getDefaultProps: function () {
                return {
                    active: false                }
            },
            render: function () {
                return (<div id={this.props.id} role="tabpanel" 
                        className={"tab-pane " + (this.props.active ? "active": "")}>
                            {this.props.children}
                        </div>);
            }
        });

    /**
    ---- exporting as ReacTabs
    */
    ReacTabs.Tabs = Tabs;
    ReacTabs.TabItem = TabItem;
    if (typeof module !== "undefined" && module.hasOwnProperty('exports')) {
        module.exports = ReacTabs;
    }
}());
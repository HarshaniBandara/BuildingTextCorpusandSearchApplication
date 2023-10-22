import React from "react";
import SidebarMenu from "react-bootstrap-sidebar-menu";
const SideBar = () => {
  return (
    <div>
      <SidebarMenu>
        <SidebarMenu.Header>
          <SidebarMenu.Brand>{/* Your brand icon */}</SidebarMenu.Brand>
          <SidebarMenu.Toggle />
        </SidebarMenu.Header>
        <SidebarMenu.Body>
          <SidebarMenu.Nav>
            <SidebarMenu.Nav.Link>
              <SidebarMenu.Nav.Icon>
                {/* Menu item icon */}
              </SidebarMenu.Nav.Icon>
              <SidebarMenu.Nav.Title>
                {/* Menu item title */}
              </SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
          </SidebarMenu.Nav>
          <SidebarMenu.Sub>
            <SidebarMenu.Sub.Toggle>
              <SidebarMenu.Nav.Icon />
              <SidebarMenu.Nav.Title>
                hiiiiiiiiiiiii
              </SidebarMenu.Nav.Title>
            </SidebarMenu.Sub.Toggle>
            <SidebarMenu.Sub.Collapse>
              <SidebarMenu.Nav>
                <SidebarMenu.Nav.Link>
                  <SidebarMenu.Nav.Icon>
                    item
                  </SidebarMenu.Nav.Icon>
                  <SidebarMenu.Nav.Title>
                    title 
                  </SidebarMenu.Nav.Title>
                </SidebarMenu.Nav.Link>
              </SidebarMenu.Nav>
            </SidebarMenu.Sub.Collapse>
          </SidebarMenu.Sub>
        </SidebarMenu.Body>
      </SidebarMenu>
    </div>
  );
};

export default SideBar;

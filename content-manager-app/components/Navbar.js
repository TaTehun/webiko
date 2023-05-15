    import { Navbar, Button, Link, Text } from "@nextui-org/react";
    import dynamic from 'next/dynamic'
    import React from 'react'
    
    const Nav = () =>
          <Navbar isCompact isBordered variant="sticky">
            <Navbar.Brand>
              <Text b color="inherit" hideIn="xs">
                ACME
              </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs" variant="underline">
              <Navbar.Link href="#">Features</Navbar.Link>
              <Navbar.Link isActive href="#">Customers</Navbar.Link>
              <Navbar.Link href="#">Pricing</Navbar.Link>
              <Navbar.Link href="#">Company</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
              <Navbar.Link color="inherit" href="#">
                Login
              </Navbar.Link>
              <Navbar.Item>
                <Button auto flat as={Link} href="#">
                  Sign Up
                </Button>
              </Navbar.Item>
            </Navbar.Content>
          </Navbar>
      

export default dynamic(()=>Promise.resolve(Nav), {ssr: false})

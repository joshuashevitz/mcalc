import React, { useState, memo } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import styled, { css } from "styled-components";


const StyledNavbar = styled(Navbar)`
	background-color: white;
	border-bottom: 1px solid black;
`;

const TopbarLink = styled.a`
	height: 100%;
	display: flex;
	align-items: center;
	font-size: 1.25rem;
	font-weight: 700;
	color: #212121;
	&:hover {
		text-decoration: none;
		&#login {
			color: hsl(0, 75%, 60%);
			transition: color 300ms;
		}
		color: hsl(189, 67%, 49%);
		transition: color 100ms;
	}
	/* This function allows you to pass this component keywords to provide different CSS styling. */
	/* In this case, any TopbarLink with "primary" results in a custom style. */
	${(props) =>
		props.primary &&
		css`
			color: hsl(189, 78%, 39%);
			font-weight: 900;
			font-size: 2.25rem;
		`}
`;

const CenteredNav = styled(Nav)`
	display: flex;
	align-items: center;
`;

const TopbarPlay = styled(TopbarLink)`
	width: 8rem;
	background-color: hsl(0, 75%, 60%);
	border: 2px solid hsl(0, 0%, 13%);
	justify-content: center;
	padding: 0.75rem 0;
	border-radius: 3px;
	font-weight: 800;
	color: white;
	&:hover {
		color: hsl(0, 75%, 60%);
		background-color: white;
		border-color: hsl(189, 78%, 39%);
		transition-duration: 300ms;
		transition-property: color, background-color, border-color;
	}
	// navbar collapses at 767px width
	@media screen and (max-width: 767px) {
		width: 10rem;
	}
`;

const Logo = styled.img`
	box-sizing: border-box;
	padding: 1px;
	border: 1px solid black;
	height: 40px;
	width: 40px;
	border-radius: 50%;
	margin-right: 0.5rem;
`;

const ProfilePic = styled(Logo)`
	margin-right: 0;
	margin-left: 0.5rem;
`;

const ProfileContainer = styled(NavLink)`
	width: 10rem;
	display: flex;
	align-items: center;
	justify-content: space-around;
	& #logout {
		font-size: 1.25rem;
		font-weight: 700;
		color: #212121;
		&:hover {
			cursor: pointer;
			color: hsl(0, 75%, 60%);
		}
	}
`;

const Separator = styled(NavItem)`
	display: flex;
	font-size: 1rem;
	font-weight: 300;
	margin: 0 1rem;
	margin-bottom: 0.5rem;
	// navbar collapses at 767px width
	@media screen and (max-width: 767px) {
		display: none;
	}
`;

// The topbar throws some nasty errors since TopbarLink is inside either a NavbarBrand or NavLink;
// both of which are ultimately anchor tags, which means an <a> is inside of an <a>, and that's
// not allowed. I tried to reformat it to get rid of those occurrences, but I can't figure out how
// to do so and make it look the same. It doesn't break anything, but still try to fix it if you want.
const Topbar = () => {
	const [collapse, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!collapse);

    return (
        <div>
          <StyledNavbar color="faded" light>
            <NavbarBrand href="/">MyCalc</NavbarBrand>
            <NavbarToggler onClick={toggle} className="mr-2" />
            <Collapse isOpen={!collapse} navbar>
              <CenteredNav navbar>
                <Separator>
                  <ProfileContainer href="">Algebra</ProfileContainer>
                </Separator>
                <Separator>
                  <ProfileContainer href="">Calculus</ProfileContainer>
                </Separator>
              </CenteredNav>
            </Collapse>
          </StyledNavbar>
        </div>
      );
    }
// Memoization saves us unnecessary re-renders whenever state changes in a component Topbar is part of.
export default memo(Topbar);
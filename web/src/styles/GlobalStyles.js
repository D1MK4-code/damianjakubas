import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
 
  html{
    font-size: 62.5%;
  }
  
  :root{
    --primary: #080315;
    --secondary: #5c6373;
    --button: #5e3bef; 
	--button-light: #ebe8fd;
	--white: #fff;
	--black: #000;
	--light: #fbfaff;
	--light-secondary: #efecfc;
	--search: #eaeaed;
  }
 

  html, body, div, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
	color: var(--secondary);
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

body{
    line-height: 1.5;
	font-family: 'DM Sans';
	padding-bottom: 19rem;
	position: relative;
	background: var(--white);
	min-height: 100vh;
  }


h1,h2,h3,h4,h5,h6 {
	font-family: 'Playfair Display';
	color: var(--primary);
	line-height: 1.3em;
	margin-bottom: 2rem;
	letter-spacing: 0.05rem;
	position: relative;
	&:before {
		content: '';
		position: absolute;
		top: -10%;
		left: -1.5rem;
		height: 115%;
		width: 100%;
		max-width: 6rem;
		background: var(--button-light);
		z-index: -1;
	}
}

.container {
	max-width: 120rem;
	margin: 0 auto;
	padding: 0 1.5rem;
}

.logo {
	font-weight: 700;
	font-size: 3.5rem;
	color: var(--black);
	font-family: 'Playfair Display';
	text-decoration: none;
	cursor: pointer;
	&:active, &:focus {
		color: var(--black);
	}
}

a {
	transition: all .1s ease-in-out;
		&:hover {
			color: var(--button)
		}   
}

.left, .right {
    width: 100%;
  }

  #disqus_thread #reactions {
	display: none;
  }

@media(min-width: 992px) {
	h1,h2,h3,h4,h5,h6 {
		&:before {
			left: -2rem;
			max-width: 8rem;
		}
	}
	.left,
    .right {
      width: 50%;
    }
    .left {
      padding-right: 1.5rem;
    }
    .right {
      padding-left: 1.5rem;
    }
  }
`;

export default GlobalStyles;

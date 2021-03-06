// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  S,
  Appear,
  Image,
  Notes,
  CodePane,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Styled Component!
import styled from 'styled-components';

import TweetEmbed from 'react-tweet-embed';

// ramda stuff
import mapObjectIndexed from 'ramda/src/mapObjIndexed';
import replace from 'ramda/src/replace';

// reusable components
import CSSLibsLogo from './components/CSSLibsLogo';
import Logos from './components/Logos';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#3B394F',
    tertiary: '#7461D1',
    quarternary: '#CC7239',
    code: '#2D2D2D',
  },
  {
    primary: 'Helvetica Neue',
    secondary: 'Helvetica Neue',
  }
);

const images = mapObjectIndexed(replace('/', ''))({
  concerns: require('./assets/2.jpg'),
  preactLogo: require('./assets/preact.svg'),
  what: require('./assets/stahp.png'),
  perf1: require('./assets/performance.png'),
  perf2: require('./assets/perf2.jpg'),
});

const StyledBlockQuote = styled(BlockQuote)`
  > span {
    margin: 2rem 0 0;
    font-size: 2.5rem !important;
  }
`;

const Tweet = styled(TweetEmbed)`transform: scale(1.3, 1.3);`;

const PaddedList = styled(List)`
  > li {
    margin: 1.5rem 0 0;
  }
`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={300}
        theme={theme}
        progress="bar"
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Text textSize="40" textAlign="left">
            A friendly disclaimer:
          </Text>
          <Text caps textSize="100" bold textAlign="left" textColor="secondary">
            <S type="bold" textColor="tertiary">
              CSS in JS
            </S>{' '}
            is just plain weird
          </Text>
          <Appear>
            <Text
              bold
              textSize="60"
              margin="2.5rem 0 0"
              textAlign="left"
              caps
              textColor="secondary"
            >
              And pretty awesome
            </Text>
          </Appear>
          <Appear>
            <Text textSize="20" textAlign="left" margin="3rem 0 0" bold>
              https://github.com/cvpcasada/2017-09-css-in-js-talk
            </Text>
          </Appear>
          <Notes>Lets do some quick intro here</Notes>
        </Slide>

        <Slide bgImage={images.what}>
          <Appear>
            <Heading
              size={1}
              caps
              fit
              textColor="quarternary"
              textFont="secondary"
            >
              Wait what?
            </Heading>
          </Appear>
          <Notes>
            - Ask the audience to have an open mind as they're gonna get
            mindblown
          </Notes>
        </Slide>

        <Slide>
          <Heading size="2" caps>
            So what makes CSS-in-JS so appealing?
          </Heading>
        </Slide>

        <Slide>
          <Heading size="2" fit caps textColor="secondary">
            css-in-js makes sense in component based ui libraries
          </Heading>
          <Logos>
            <img
              src="https://facebook.github.io/react/img/logo.svg"
              alt="react"
            />
            <img
              src="https://cdn.rawgit.com/vuejs/art/d957d61d/logo.svg"
              alt="vue"
            />
            <img src={images.preactLogo} alt="preact" />
          </Logos>
          <Notes>
            If your'e not using component based ui libraries, then css-in-js
            might not be for you
          </Notes>
        </Slide>

        <Slide>
          <Heading size="5" textColor="secondary">
            Just some of the popular ones
          </Heading>
          <Heading size="3" caps textColor="secondary">
            CSS-in-JS libraries
          </Heading>
          <Logos>
            <CSSLibsLogo
              textColor="white"
              bgColor="palevioletred"
              textAlign="left"
            >
              <span>{`< 💅 >`}</span> <span>Styled Components</span>
            </CSSLibsLogo>
            <CSSLibsLogo textColor="#F45163" textFont="Playfair Display">
              <span>{`{ 💄 }`}</span> <span>glamorous</span>
            </CSSLibsLogo>
            <CSSLibsLogo>
              <span>{`👩‍🎤`}</span> <span>Emotion</span>
            </CSSLibsLogo>
          </Logos>
          <Notes>Its funny that these popular libraries uses emoji as their brand logos</Notes>
        </Slide>

        {/*<Slide bgColor="code">*/}
        {/*<Heading size="5" caps textAlign="left" textColor="primary">Glamour</Heading>*/}
        {/*<CodePane textSize="12pt" lang="jsx" source={require('./assets/glamor.example.js').default} />*/}
        {/*</Slide>*/}

        <Slide bgColor="code">
          <Heading size="5" caps textAlign="left" textColor="primary">
            Styled Components / Emotion
          </Heading>
          <CodePane
            textSize="18pt"
            lang="jsx"
            source={require('./assets/styled-components.example.js').default}
          />
        </Slide>

        <Slide bgColor="code">
          <Heading size="5" caps textAlign="left" textColor="primary">
            Glamorous
          </Heading>
          <CodePane
            textSize="18pt"
            lang="jsx"
            source={require('./assets/glamorous.example.js').default}
          />
        </Slide>

        <Slide bgColor="code">
          <Heading size="5" caps textAlign="left" textColor="primary">
            Emotion (Object styles!)
          </Heading>
          <CodePane
            textSize="18pt"
            lang="jsx"
            source={require('./assets/emotion.example.js').default}
          />
        </Slide>

        <Slide notes="
          Starts to make sense when you write in components. Think of components in isolation.
        ">
          <Heading size="2" caps>
            Isolation and Reuse
          </Heading>
          <Text textColor="secondary">
            Focus instead on building UI Components that can be reused.
          </Text>
          <Notes>The key here is that we try to scope our css to our components, avoiding complex cascades</Notes>
        </Slide>

        <Slide>
          <Notes>
            - Imagine if JS was all global variables and you didn't have the
            concept of scope. - Bootstrap 3 has over 600 globals classes! -
            Humans are not robots, developers have different styles, naming
            methodologies help but that is another thing to study. - Lets just
            make CSS as compile target.
          </Notes>
          <BlockQuote>
            <Tweet id="907773940977754112" />
          </BlockQuote>
          <PaddedList>
            <ListItem textSize="24pt">
              CSS has no scopes, everything is global
            </ListItem>
            <ListItem textSize="24pt">
              Naming methodologies like BEM or SMACSS, etc.. solves this but its
              another convention we have to conform
            </ListItem>
            <ListItem textSize="24pt">
              CSS Modules is great, but it requires a build tool config like
              webpack
            </ListItem>
          </PaddedList>
        </Slide>

        <Slide>
          <Heading size="2" fit caps>
            Interaction with Javascript environment
          </Heading>
          <PaddedList>
            <ListItem>Full access to programming language features</ListItem>
            <ListItem>SASS Mixins vs just functions, see </ListItem>
            <ListItem>Can accept props</ListItem>
          </PaddedList>
        </Slide>

        <Slide>
          <Notes>
            Third party ui components -
            https://github.com/jameslnewell/styled-components-grid
          </Notes>
          <Heading size="2" caps>
            Share-ability
          </Heading>
          <List>
            <ListItem>just `npm install` anything</ListItem>

            <Logos>
              <CSSLibsLogo>
                <span>{`\${✨}`}</span>
                <span>Polished</span>
              </CSSLibsLogo>
            </Logos>

            <ListItem>Extendable and composable</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size="2" caps>
            Not just for the web
          </Heading>
          <PaddedList>
            <ListItem>React is available Everywhere</ListItem>
            <ListItem>
              Supports native mobile apps through React Native
            </ListItem>
            <ListItem>Virtual Reality Apps</ListItem>
          </PaddedList>
        </Slide>

        <Slide>
          <Heading size="2" caps>
            Lets bust some myths
          </Heading>
        </Slide>

        <Slide>
          <Text fit caps textColor="secondary">
            1. Isn't it bad practice to mix view logic and code
          </Text>
          <Heading
            fill
            textAlign="left"
            size="2"
            margin="5rem 0 0"
            textColor="secondary"
          >
            Did that with html and js, so why not?
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <StyledBlockQuote>
            <Quote>
              Display logic and markup are{' '}
              <S type="bold" textColor="quarternary">
                tightly coupled
              </S>{' '}
              and{' '}
              <S type="bold" textColor="quarternary">
                highly cohesive
              </S>{' '}
              (both show ui)
            </Quote>
            <Quote>
              Separation of{' '}
              <S type="bold" textColor="quarternary">
                concerns
              </S>, not{' '}
              <S type="bold" textColor="quarternary">
                technologies
              </S>
            </Quote>
            <Cite>
              Pete Hunt, React: Rethinking best practices - JSConf EU 2013
            </Cite>
          </StyledBlockQuote>
        </Slide>

        <Slide>
          <Image fill src={images.concerns} height="600" />
          <Cite>Cristiano Rastelli, Let there be peace on CSS</Cite>
        </Slide>

        <Slide>
          <Text fit caps textColor="secondary">
            2. Isn't it the same thing as inlining CSS.
          </Text>
          <Heading
            fill
            textAlign="left"
            size="3"
            margin="5rem 0 0"
            textColor="secondary"
          >
            Most libs now compile to raw css and it is injected into a page.
          </Heading>
          <Notes>Via a CSS file or style tag</Notes>
        </Slide>

        <Slide>
          <Text fit caps>
            3. But the performance...
          </Text>
          <Heading
            fill
            textAlign="left"
            size="3"
            margin="5rem 0 0"
            textColor="secondary"
          >
            Its pretty fast.
          </Heading>
        </Slide>

        <Slide>
          <Image src={images.perf1} fill height="650" />
        </Slide>
        <Slide>
          <Image src={images.perf2} fill height="650" />
        </Slide>

        <Slide>
          <Text textColor="secondary">
            If you do server-side rendering and your code have conditional
            styles. you can ship less code for every server side render
          </Text>
          <Text margin="2rem 0 0" textColor="secondary">
            <S type="bold" textColor="quarternary">
              Critical CSS
            </S>{' '}
            - the CSS required to do a first render of a page. It is suggested
            you inline this CSS in order to improve initial page load times.
          </Text>
          <Notes>
            - This is normally hard to do, but it is natural in css-in-js -
            fairly manual process - requires build tools for automation -
            Perceived effort outweighs work.
          </Notes>
        </Slide>

        <Slide>
          <Text fit caps textColor="secondary">
            4. What if javascript is disabled on the client?
          </Text>
          <Heading
            fill
            textAlign="left"
            size="3"
            margin="5rem 0 0"
            textColor="secondary"
          >
            Server Side Rendering!
          </Heading>
        </Slide>

        <Slide>
          <Heading textColor="secondary">CSS-IN-JS is still pretty new</Heading>
        </Slide>

        <Slide>
          <Heading size="5" caps textColor="secondary">
            Concerns with keeping up...<br/><br/> Many ways to do things.<br/><br/>  Web development
            moves very fast.
          </Heading>
        </Slide>

        <Slide>
          <Heading size="5" caps textColor="secondary">
            If you are not ready, just wait.
          </Heading>
          <Heading size="5" caps margin="3rem 0 0" textColor="secondary">
            if you are ready, have fun!
          </Heading>
        </Slide>

        <Slide>
          <Heading size="1" caps textColor="secondary">
            END
          </Heading>
          <Text
            textAlign="left"
            margin="2rem 0 0"
            textColor="secondary"
            caps
            bold
          >
            Additional resources:
          </Text>
          <PaddedList>
            <ListItem>
              Mark Dalgesh, A Unified Styling Language <br />{' '}
              https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660
            </ListItem>
            <ListItem>
              James Rauhut, CSS-in-JS is Insanely Good <br />{' '}
              https://vimeo.com/230614037
            </ListItem>
            <ListItem>
              Syntax fm podcast, Episode 10 <br />{' '}
              https://syntax.fm/show/010/css-in-js-drama-free
            </ListItem>
          </PaddedList>
        </Slide>
      </Deck>
    );
  }
}

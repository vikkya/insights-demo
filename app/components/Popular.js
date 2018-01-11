var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');

function SelectLanguage(props) {
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul className='languages'>
      {languages.map((lang) => {
        return (
          <li
            style={lang === props.selectedLanguage ? { color: '#d0021b'} : null}
            onClick={props.onSelect.bind(null, lang)} 
            key={lang}>
              {lang}
          </li>
        )
      })}
    </ul>
  )
}

function RepoGrid(props) {
  return (
    <ul className='popular-list'>
      {props.repos.map((repo, index) => {
        return (
          <li key={repo.name} className='popular-item'>
            <div className="popular-rank">#{index + 1}</div>
            <ul className="space-list-items">
              <li>
                <img
                  className='avatar'
                  src={repo.owner.avatar_url}
                  alt={'Avatar for ' + repo.owner.login}
                />
              </li>
              <li><a href={repo.html_url}>{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor (props) {
    super(props);
    ///// initial state
    this.state = {
      selectedLanguage: 'All',
      repos: null,
      browser: null
    };

    this.updateLanguage = this.updateLanguage.bind(this);
    this.updateBrowser = this.updateBrowser.bind(this);
  }

  // lifecycle
  componentDidMount () {
    this.updateLanguage(this.state.selectedLanguage);
    this.updateBrowser(1418, '2017-11-01', '2017-11-30');
  }

  ///// way to update initial state
  updateLanguage(lang) {
    this.setState(() => {
      return {
        selectedLanguage: lang,
        repos: null
      }
    });

    api.fetchPopularRepos(lang)
      .then(function(repos) {
        this.setState(() => {
          return {
            repos: repos
          }
        })
      }.bind(this));
  };

  updateBrowser(id, startDate, endDate){
    this.setState(() => {
      return{
        startDate: startDate,
        endDate: endDate,
        repo: null
      }
    });
    api.browserLevel(id, startDate, endDate)
    .then(function(repos){
      this.setState(() => {
        return{
          browser: repos
        }
      })
    }.bind(this));
  }

  render() {
    return (
      //// UI
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
  {console.log(this.state.browser)}
        {!this.state.repos
          ? <p>Loading</p>
          : <RepoGrid repos={this.state.repos} />}
      </div>
    )
  }
}

module.exports = Popular;
import React from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'All',
    };
  }

  onSelectFilter = filter => {
    this.setState({
      selected: filter,
    });
  };

  filterProjects = () => {
    if (this.state.selected !== 'All') {
      return this.props.projects.filter(
        project => project.category === this.state.selected,
      );
    }
    return this.props.projects;
  };

  render() {
    const { filters } = this.props;
    return (
      <div>
        <Toolbar
          filters={filters}
          selected={this.state.selected}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList projects={this.filterProjects()} />
      </div>
    );
  }
}

export default Portfolio;

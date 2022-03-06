import { Hero } from "../hero-item/hero"
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchHeroesList } from "../../redux/actions/heroesListActions"


const HeroesList = ({ dispatch, loading, heroes, hasErrors, page }) => {
    useEffect(() => {
      dispatch(fetchHeroesList(page))
    }, [dispatch])
  
    const renderHeroes = () => {
      if (loading) return <p>Loading heroes...</p>
      if (hasErrors) return <p>Unable to display heroes.</p>
  
      return heroes.map(hero => <Hero key={hero.id} hero={hero} />)
    }
  
    return (
      <section>
        {renderHeroes()}
      </section>
    )
  }

  const mapStateToProps = state => ({
    loading: state.loadHeroes.loading,
    heroes: state.loadHeroes.heroes,
    hasErrors: state.loadHeroes.hasErrors,
    page: state.loadHeroes.page
  })
  
  export default connect(mapStateToProps)(HeroesList)
  
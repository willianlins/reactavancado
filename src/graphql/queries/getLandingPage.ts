const GET_LANDING_PAGE = /*GraphQL*/ `
fragment logo on LandingPage{
  logo{
    data{
      attributes{
        alternativeText
        url
      }
    }
  }
}

fragment header on LandingPage{
  header{
    title
    description
    button{
      label
      url
    }
    image{
      data{
        attributes{
          alternativeText
          url
        }
      }
    }
  }
}

fragment sectionAboutProject on LandingPage{
	sectionAboutProject {
    title
    description
    image{
      data{
        attributes{
          alternativeText
          url
        }
      }
    }
  }
}

fragment sectionTech on LandingPage {
  sectionTech{
    title
    techIcons{
      title
      icon{
        data{
          attributes{
            url
          }
        }
      }
    }
  }
}

fragment sectionConcepts on LandingPage {
  sectionConcepts{
    title
    concepts{
      title
    }
  }
}

fragment sectionModules on LandingPage{
  sectionModules{
    title
    modules{
      title
      subtitle
      description
    }
  }
}

fragment sectionAgenda on LandingPage{
  sectionAgenda{
    title
    description
  }
}


fragment princingBox on LandingPage {
  pricingBox {
    totalPrice
    numberInstallments
    pricingInstallments
    benefits
    button{
      label
      url
    }
  }
}
fragment sectionAbout on LandingPage{
  sectionAboutUs{
    title
    authors{
      data{
        attributes{
          photo{
            data{
              attributes{
                alternativeText
                url
              }
            }
          }
          name
          role
          description
          socialLinks{
            title
            url
          }
        }
      }
    }
  }
}

fragment sectionFaq on LandingPage{
  sectionFaq{
  	title
    questions{
      question
      answer
    }
}
}

fragment sectionReviews on LandingPage{
  sectionReviews{
    title
    reviews{
      name
      text
      photo{
        data{
          attributes{
            url
          }
        }
      }
    }
  }
}


query GET_LANDING_PAGE {
 landingPage{
    data{
      attributes{
      	...logo
      	...header
      	...sectionAboutProject
        ...sectionTech
        ...sectionConcepts
        ...sectionModules
        ...sectionAgenda
        ...princingBox
        ...sectionAbout
        ...sectionReviews
        ...sectionFaq
      }
    }
  }
}

`
export default GET_LANDING_PAGE

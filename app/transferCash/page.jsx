'use client'
import { useState, useEffect } from 'react'

import Image from 'next/image'
import styles from '../../styles/transferCash.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronDown, faX } from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faGooglePlay,
  faApple,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons' // Import the Google Play icon
import Link from 'next/link'

export default function TransferCash() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuClosing, setIsMenuClosing] = useState(false) //state for closing animation

  // Toggle between showing faBars and faX icons
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const navBarIcon = document.getElementById('navBarIcon')
    const navXicon = document.getElementById('navXIcon')
    const mobileMenu = document.getElementById('mobileMenu')
    const mobileMenuNone = document.getElementById('mobileMenuNone')
    const header = document.getElementById('header')
    const body = document.getElementById('body')
  }, [])

  const handleNavBarIcon = () => {
    mobileMenu.classList.add(styles.mobileMenuOpen)
    mobileMenu.style.display = 'flex'
    mobileMenuNone.style.display = 'flex'
    mobileMenuNone.style.height = '100vh'
    header.style.overflow = 'visible'
    body.style.position = 'fixed'
  }

  const handleNavXIcon = () => {
    // Start the closing animation
    setIsMenuClosing(true)

    // After the exit animation is done, hide the menu
    setTimeout(() => {
      mobileMenu.style.display = 'none'
      mobileMenuNone.style.display = 'none'
      header.style.overflow = 'hidden'
      body.style.position = 'relative'
      setIsMenuClosing(false) // Reset the state
      mobileMenu.classList.remove(styles.mobileMenuOpen) // Clean up the open state
    }, 1000) // This should match the animation duration
  }

  return (
    <>
      <div id='body' className={styles.body}>
        {/* ****************************** header start **************************************/}
        <header id='header' className={`${styles.header}`}>
          <nav className={`${styles.nav} ${styles.flexColumn}`}>
            <div className={`${styles.desktopNav} ${styles.spaceBetween} `}>
              <div className={styles.leftNavigation}>
                <Image
                  src='./Images/cudium-logo.svg'
                  alt='Cudium Logo'
                  width={25}
                  height={25}
                  className={styles.cudiumLogo}
                />

                <p className={`${styles.cudiumLogoText} ${styles.whiteColor}`}>
                  Cudium
                </p>
              </div>

              <div
                className={`${styles.desktopServiceMenu} ${styles.alignCenter} ${styles.spaceAround} ${styles.twoRemGap} `}
              >
                <div
                  className={`${styles.flexRow} ${styles.alignCenter} ${styles.smallGap} ${styles.dropdown}`}
                >
                  <div
                    className={`${styles.dropBtn} ${styles.smallGap} ${styles.alignCenter}`}
                  >
                    <p className={`${styles.desktopServiceMenuServiceText} `}>
                      Services
                    </p>

                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`${styles.servicesIcon} ${styles.whiteColor} `}
                    />
                  </div>

                  <div className={styles.dropdownContent}>
                    <Link href='/foreignAccount'>
                      <p>Foreign Account</p>
                    </Link>
                  </div>
                </div>
                <p className={styles.desktopServiceMenuBlogText}>Blog</p>
                <p className={styles.desktopServiceMenuHelpText}>Help Center</p>
              </div>

              <div className={styles.navButton}>
                <button
                  className={`${styles.navButtonText} ${styles.whiteColor}`}
                >
                  Download app
                </button>
              </div>

              <div
                onClick={toggleMenu}
                className={`${styles.mobileIcons} ${styles.iconWrapper} ${
                  isMenuOpen ? styles.menuOpen : styles.menuClosed
                }`}
              >
                {isMenuOpen ? (
                  <FontAwesomeIcon
                    icon={faX}
                    className={styles.navXicon}
                    onClick={handleNavXIcon}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faBars}
                    className={styles.navBarIcon}
                    onClick={handleNavBarIcon}
                  />
                )}
              </div>
            </div>

            <div className={styles.mobileMenuNone} id='mobileMenuNone'>
              <div
                className={`${styles.mobileMenu} ${
                  isMenuClosing ? styles.mobileMenuClosing : ''
                }`}
                id='mobileMenu'
              >
                <ul
                  className={`${styles.mobileMenuListItems} ${styles.flexColumn}`}
                >
                  <li>
                    <button className={styles.mobileMenuButton}>
                      <p className={styles.mobileMenuButtonText}>
                        Download app
                      </p>
                    </button>
                  </li>
                  <li className={`${styles.mobileMenuServiceText}`}>
                    Services
                  </li>
                  <li
                    className={`${styles.mobileMenuBlogText}`}
                    // onClick={goToForeignAccountPage}
                  >
                    Blog
                  </li>
                  <li className={`${styles.mobileMenuHelpText}`}>
                    Help Center
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className={styles.desktopHeaderBottom}>
            <div
              className={`${styles.headerCenterContainer} ${styles.desktopHeaderBottomLeft}`}
            >
              <div>
                <p className={styles.headerBoldText}>
                  Enjoy Limitless local and International transaction.
                </p>
                <p className={styles.headerSubText}>
                  Don't just hear about the better way to send money. Use the
                  better way.
                </p>

                <div className={`${styles.headerButtons} ${styles.flexRow}`}>
                  <button
                    className={`${styles.playstoreButton} ${styles.alignCenter} ${styles.justifyCenter} ${styles.blackBcg}`}
                  >
                    <FontAwesomeIcon
                      icon={faGooglePlay}
                      className={styles.playstoreIcon}
                    />
                    <div
                      className={`${styles.alignFlexStart} ${styles.flexColumn} ${styles.smallerGap}`}
                    >
                      <p
                        className={`${styles.headerBtnSubText} ${styles.whiteColor}`}
                      >
                        DOWNLOAD ON
                      </p>

                      <p
                        className={`${styles.headerBtnBoldText} ${styles.whiteColor}`}
                      >
                        Google Play
                      </p>
                    </div>
                  </button>

                  <button
                    className={`${styles.appstoreButton} ${styles.alignCenter} ${styles.justifyCenter} ${styles.blackBcg}`}
                  >
                    <FontAwesomeIcon
                      icon={faApple}
                      className={styles.appstoreIcon}
                    />
                    <div
                      className={`${styles.smallerGap} ${styles.flexColumn}`}
                    >
                      <p
                        className={`${styles.headerBtnSubText} ${styles.whiteColor}`}
                      >
                        DOWNLOAD ON
                      </p>
                      <p
                        className={`${styles.headerBtnBoldText} ${styles.whiteColor}`}
                      >
                        App Store
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`${styles.headerBottomContainer} ${styles.flexColumn} ${styles.desktopHeaderBottomRight}`}
            >
              <div
                className={`${styles.headerBottomLeftContainer} ${styles.desktopHeaderBottomLeftContainer} ${styles.halfRemGap} ${styles.flexColumn} `}
              >
                <p
                  className={`${styles.headerBottomLeftContainerText} ${styles.textAlign}`}
                >
                  Transaction Successful
                </p>

                <p
                  className={`${styles.headerBottomLeftContainerNum} ${styles.alignCenter} ${styles.justifyCenter}`}
                >
                  $560.80
                </p>
              </div>

              <Image
                src='/Images/header-img.svg'
                width={300}
                height={300}
                className={styles.headerBottomImg}
              />

              <div
                className={`${styles.headerBottomRightContainer} ${styles.desktopHeaderBottomRightContainer} ${styles.flexColumn}`}
              >
                <Image
                  src='/Images/Image2.svg'
                  width={25}
                  height={25}
                  className={styles.headerbottomImg2}
                />

                <div
                  className={`${styles.headerBottomRightContainerFlexRow} ${styles.alignCenter}`}
                >
                  <Image src='/Images/check-icon.svg' width={16} height={16} />
                  <p className={styles.headerBottomRightBoldText}>
                    Cash Received
                  </p>
                </div>

                <p className={styles.headerBottomRightSubText}>
                  You just received $20 from @tom, ID: 34RTQ7H, Date: 12-02-2022
                </p>
              </div>
            </div>
          </div>
        </header>
        {/* ********************* header end ************************************************* */}

        {/* ****************** section one start ******************************************/}
        <section
          className={`${styles.sectionOne} ${styles.flexColumn}  ${styles.alignCenter}`}
        >
          <div
            className={`${styles.desktopSectionOnefiftyVw} ${styles.sectionOneBoxContainer}`}
          >
            <Image
              src='/Images/kuda.svg'
              width={50}
              height={50}
              className={styles.kudaImg}
            />
            <Image
              src='/Images/gtb.svg'
              width={40}
              height={40}
              className={styles.gtbImg}
            />
            <Image
              src='/Images/a.svg'
              width={50}
              height={50}
              className={styles.aImg}
            />

            <div className={styles.sectionOneBox}>
              <div className={styles.balanceBox}>
                <p className={styles.balanceText}>Available Balance</p>
                <div
                  className={`${styles.balanceFlex} ${styles.spaceBetween} ${styles.alignFlexEnd}`}
                >
                  <p className={`${styles.balanceFig} ${styles.whiteColor}`}>
                    $ 5,600. 00
                  </p>
                  <Image src='/Images/eye.svg' width={15} height={15} />
                </div>
              </div>

              <div className={styles.amountBox}>
                <p className={styles.amountText}>Amount</p>
                <div className={`${styles.flexRow} ${styles.boxes}`}>
                  <div className={styles.amountContainer}>
                    <p className={styles.amountContainerFig}>₦5000</p>
                  </div>

                  <div
                    className={`${styles.ngnBox} ${styles.alignCenter} ${styles.spaceBetween}`}
                  >
                    <div className={`${styles.flexRow} ${styles.alignCenter}`}>
                      <Image
                        src='/Images/flag.svg'
                        width={13}
                        height={13}
                        className={styles.nigFlag}
                      />
                      <p className={styles.ngnText}>NGN</p>
                    </div>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={styles.ngnIcon}
                    />
                  </div>
                </div>
              </div>

              <div>
                <p className={styles.bankAcountText}>Bank Account</p>
                <div
                  className={`${styles.spaceBetween} ${styles.selectBankBox} ${styles.alignCenter}`}
                >
                  <p className={styles.selectBankBoxText}>Select Bank</p>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={styles.ngnIcon}
                  />
                </div>
              </div>

              <div>
                <p className={styles.accountNumberText}>Account Number</p>
                <div className={styles.enterAccount}>
                  <p className={styles.enterAccountText}>
                    Enter account number
                  </p>
                </div>
              </div>

              <Image
                src='/Images/desktopCard.png'
                width={150}
                height={90}
                className={styles.desktopCard}
              />
            </div>
          </div>

          <div
            className={`${styles.sectionOneDesc} ${styles.flexColumn} ${styles.desktopSectionOnefiftyVw}`}
          >
            <p
              className={`${styles.sectionOneDescBoldText} ${styles.blackColor}`}
            >
              Withdraw your money to any local bank
            </p>
            <p className={styles.sectionOneDescLightText}>
              Send more with lesser charge. The era of hidden charges is over.
            </p>
          </div>

          <div
            className={`${styles.circleDesc} ${styles.flexColumn} ${styles.desktopSectionOnefiftyVw}`}
          >
            <p className={`${styles.circleDescBoldText} ${styles.blackColor}`}>
              Transact in three different currencies. For Now.
            </p>
            <p className={styles.circleDescLightText}>
              Transfer and withdraw funds in Dollar, GBP and pounds. More to be
              added soon
            </p>
          </div>

          <div
            className={`${styles.circleContainer} ${styles.justifyCenter} ${styles.desktopSectionOnefiftyVw}`}
          >
            <Image
              src='/Images/sectionOneCircleImg.svg'
              width={100}
              height={100}
              className={styles.sectionOneCircleImg}
            />
          </div>

          <div
            className={`${styles.container3} ${styles.flexColumn} ${styles.desktopSectionOnefiftyVw}`}
          >
            <Image
              src='/Images/image2.svg'
              width={55}
              height={55}
              className={styles.image2}
            />

            <Image
              src='/Images/checkmark.svg'
              width={80}
              height={80}
              className={styles.checkmark}
            />

            <div className={styles.container3Shadow}></div>

            <div
              className={`${styles.container3Elem1} ${styles.flexRow} ${styles.spaceBetween}`}
            >
              <div className={`${styles.smallGap} ${styles.flexColumn}`}>
                <p className={styles.container3BoldText}>
                  United state Dollar ($)
                </p>
                <p className={styles.container3LightText}>$ 0. 00</p>
              </div>

              <div>
                <Image
                  src='/Images/dollar-background.png'
                  width={30}
                  height={30}
                />
              </div>
            </div>

            <div
              className={`${styles.container3Elem2} ${styles.flexRow} ${styles.spaceBetween}`}
            >
              <div className={`${styles.smallGap} ${styles.flexColumn}`}>
                <p className={styles.container3BoldText}>
                  United state Dollar ($)
                </p>
                <p className={styles.container3LightText}>$ 0. 00</p>
              </div>
              <div>
                <Image
                  src='/Images/euro-background.png'
                  width={30}
                  height={30}
                />
              </div>
            </div>

            <div
              className={`${styles.container3Elem3} ${styles.flexRow} ${styles.spaceBetween}`}
            >
              <div className={`${styles.smallGap} ${styles.flexColumn}`}>
                <p className={styles.container3BoldText}>
                  United state Dollar ($)
                </p>
                <p className={styles.container3LightText}>$ 0. 00</p>
              </div>

              <div>
                <Image
                  src='/Images/pound-background.png'
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>

          <div
            className={`${styles.container3Desc} ${styles.flexColumn} ${styles.desktopSectionOnefiftyVw}`}
          >
            <p
              className={`${styles.container3DescBoldText} ${styles.blackColor}`}
            >
              Your money is definitely safe with us.
            </p>
            <p className={styles.container3DescLightText}>
              With multi-factor authentication, your money goes only where YOU
              want it to go
            </p>
          </div>
        </section>
        {/* ************************** section one end****************************** */}

        {/* ************************** section two start****************************** */}
        <section
          className={`${styles.sectionTwo} ${styles.justifyCenter}  ${styles.flexColumn} ${styles.twoRemGap}`}
        >
          <div
            className={`${styles.sectionTwoTop} ${styles.oneRemGap} ${styles.flexColumn} ${styles.textAlign} `}
          >
            <p
              className={`${styles.sectionTwoTopBoldText} ${styles.blackColor}`}
            >
              It’s Easy and Fast to Open an account
            </p>
            <p className={styles.sectionTwoTopLightText}>
              Our servies will make you wonder what you have been doing with
              your old bank.
            </p>
          </div>

          <div
            className={`${styles.sectionTwoBottom} ${styles.flexColumn} ${styles.twoRemGap}`}
          >
            <div
              className={`${styles.flexRow} ${styles.alignCenter} ${styles.oneRemGap} ${styles.desktopSectionTwoBottomFlexColumn}`}
            >
              <div>
                <Image src='/Images/image01.png' width={55} height={55} />
              </div>

              <div
                className={`${styles.flexColumn} ${styles.smallGap} ${styles.desktopSectionTwoBottomFlexColumnTexts}`}
              >
                <p className={styles.sectionTwoBottomBoldText}>
                  Register with Us
                </p>
                <p className={styles.sectionTwoBottomLightText}>
                  Sign up stress free. It will only take a few minutes to get
                  started.
                </p>
              </div>
            </div>

            <Image
              src='/Images/nLine.svg'
              width={100}
              height={50}
              className={styles.nLine}
            />

            <div
              className={`${styles.flexRow} ${styles.alignCenter} ${styles.oneRemGap} ${styles.desktopSectionTwoBottomFlexColumn}`}
            >
              <div>
                <Image src='/Images/image02.png' width={55} height={55} />
              </div>

              <div
                className={`${styles.flexColumn} ${styles.smallGap} ${styles.desktopSectionTwoBottomFlexColumnTexts}`}
              >
                <p className={styles.sectionTwoBottomBoldText}>
                  Complete your KYC
                </p>
                <p className={styles.sectionTwoBottomLightText}>
                  Verify and secure your account with government issued ID.
                </p>
              </div>
            </div>

            <Image
              src='/Images/uLine.svg'
              width={100}
              height={50}
              className={styles.uLine}
            />

            <div
              className={`${styles.flexRow} ${styles.alignCenter} ${styles.oneRemGap} ${styles.desktopSectionTwoBottomFlexColumn}`}
            >
              <div>
                <Image src='/Images/image03.png' width={55} height={55} />
              </div>

              <div
                className={`${styles.flexColumn} ${styles.smallGap} ${styles.desktopSectionTwoBottomFlexColumnTexts}`}
              >
                <p className={styles.sectionTwoBottomBoldText}>
                  Own a virtual account
                </p>
                <p className={styles.sectionTwoBottomLightText}>
                  Now you can make foreign transactions with your account.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ************************** section two end****************************** */}

        {/* ************************** section three start****************************** */}

        <div
          className={`${styles.sectionThree}  ${styles.flexColumn}  ${styles.justifyCenter}  ${styles.alignCenter}`}
        >
          <Image
            src='/Images/Frame.png'
            width={30}
            height={30}
            className={styles.topFrame}
          />
          <p className={styles.sectionThreeBoldText}>
            Download your Cudium app Now
          </p>
          <p className={`${styles.sectionThreeLightText}`}>
            Orci quis venenatis tincidunt. Duis porta orci non
          </p>

          <div className={`${styles.headerButtons} ${styles.flexRow}`}>
            <button
              className={`${styles.playstoreButton} ${styles.alignCenter} ${styles.justifyCenter} ${styles.blackBcg}`}
            >
              <FontAwesomeIcon
                icon={faGooglePlay}
                className={styles.playstoreIcon}
              />
              <div
                className={`${styles.alignFlexStart} ${styles.flexColumn} ${styles.smallerGap}`}
              >
                <p
                  className={`${styles.headerBtnSubText} ${styles.whiteColor}`}
                >
                  DOWNLOAD ON
                </p>

                <p
                  className={`${styles.headerBtnBoldText} ${styles.whiteColor}`}
                >
                  Google Play
                </p>
              </div>
            </button>

            <button
              className={`${styles.appstoreButton} ${styles.alignCenter} ${styles.justifyCenter} ${styles.blackBcg}`}
            >
              <FontAwesomeIcon icon={faApple} className={styles.appstoreIcon} />
              <div className={`${styles.smallerGap} ${styles.flexColumn}`}>
                <p
                  className={`${styles.headerBtnSubText} ${styles.whiteColor}`}
                >
                  DOWNLOAD ON
                </p>
                <p
                  className={`${styles.headerBtnBoldText} ${styles.whiteColor}`}
                >
                  App Store
                </p>
              </div>
            </button>
          </div>

          <Image
            src='/Images/Frame.png'
            width={30}
            height={30}
            className={styles.bottomFrame}
          />
        </div>
        {/* ************************** section three end****************************** */}

        {/* ************************* Mobile Footer ******************* */}
        <footer className={styles.footer}>
          <div className={styles.footerTop}>
            <div className={`${styles.footerTopGap} ${styles.flexColumn}`}>
              <div className={`${styles.blogGap} ${styles.flexRow}`}>
                <h3 className={styles.h3}>How it Works</h3>
                <h3 className={styles.h3}>Blog</h3>
              </div>

              <h3 className={styles.h3}>FAQs & Help</h3>

              <div className={`${styles.servicesList} ${styles.flexColumn}`}>
                <h3 className={styles.h3}>Services</h3>
                <p>Create foreign account</p>
                <p>Transfer cash</p>
                <p>Manage funds</p>
              </div>

              <div className={`${styles.contactList} ${styles.flexColumn}`}>
                <h3 className={styles.h3}>Contact</h3>
                <p>Call us: +2345860387603</p>
                <p>Write us: js@cudium.com</p>
              </div>
            </div>

            <div className={styles.footerBottom}>
              <div
                className={`${styles.footerLogoContainer} ${styles.flexRow} ${styles.alignCenter}`}
              >
                <Image
                  src='/Images/cudium-blue.svg'
                  width={30}
                  height={30}
                  className={styles.footerCudiumLogo}
                />
                <p className={`${styles.footerLogoContainerText}`}>Cudium</p>
              </div>

              <p className={styles.footerBottomText}>
                Learn more about Cudium, get engaged and have a say in making
                cross-border payment better. Follow us on:
              </p>

              <div className={styles.footerIcons}>
                <FontAwesomeIcon
                  icon={faTwitter}
                  className={styles.twitterIcon}
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={styles.instagramIcon}
                />
                <FontAwesomeIcon
                  icon={faFacebook}
                  className={styles.faceBookIcon}
                />
              </div>

              <div
                className={`${styles.alignCenter} ${styles.copyrightContainer} `}
              >
                <p className={` ${styles.copyrightText}`}>Copyright reserved</p>
                <p className={` ${styles.TermsOfUseText}`}>Terms of Use</p>
                <p className={`${styles.privacyText}`}>Privacy policy</p>
              </div>
            </div>
          </div>
        </footer>
        {/* ************************* Mobile Footer ******************* */}

        {/* ************************* Desktop Footer ******************* */}
        <footer className={` ${styles.desktopFooter} ${styles.flexColumn}`}>
          <div className={`${styles.desktopFooterTop} ${styles.flexRow}`}>
            <div
              className={`${styles.flexColumn} ${styles.desktopFooterColumnFiftyVw}`}
            >
              <div
                className={`${styles.desktopFooterLogoContainer} ${styles.flexRow} ${styles.alignCenter}`}
              >
                <Image
                  src='/Images/cudium-blue.svg'
                  width={30}
                  height={30}
                  className={styles.footerCudiumLogo}
                />
                <p className={`${styles.footerLogoContainerText}`}>Cudium</p>
              </div>

              <p className={styles.footerBottomText}>
                Learn more about Cudium, get engaged and have a say in making
                cross-border payment better. Follow us on:
              </p>

              <div className={styles.footerIcons}>
                <FontAwesomeIcon
                  icon={faTwitter}
                  className={styles.twitterIcon}
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={styles.instagramIcon}
                />
                <FontAwesomeIcon
                  icon={faFacebook}
                  className={styles.faceBookIcon}
                />
              </div>
            </div>

            <div
              className={`${styles.flexColumn} ${styles.desktopFooterColumntwentyFiveVw}`}
            >
              <div className={`${styles.blogGap} ${styles.flexRow}`}>
                <h3 className={styles.h3}>How it Works</h3>
              </div>

              <div className={`${styles.servicesList} ${styles.flexColumn}`}>
                <h3 className={styles.h3}>Services</h3>
                <p>Create foreign account</p>
                <p>Transfer cash</p>
                <p>Manage funds</p>
              </div>
            </div>

            <div
              className={`${styles.flexColumn} ${styles.desktopFooterColumntwentyFiveVw}`}
            >
              <h3 className={styles.h3}>Blog</h3>

              <div className={`${styles.contactList} ${styles.flexColumn}`}>
                <h3 className={styles.h3}>Contact</h3>
                <p>Call us: +2345860387603</p>
                <p>Write us: js@cudium.com</p>
              </div>

              <h3 className={`${styles.h3} ${styles.faqsText}`}>FAQs & Help</h3>
            </div>
          </div>

          <div
            className={`${styles.alignCenter} ${styles.copyrightContainer} ${styles.justifyCenter} `}
          >
            <p className={` ${styles.copyrightText}`}>Copyright reserved</p>
            <p className={` ${styles.TermsOfUseText}`}>Terms of Use</p>
            <p className={`${styles.privacyText}`}>Privacy policy</p>
          </div>
        </footer>
        {/* ************************* Desktop Footer ******************* */}
      </div>
    </>
  )
}

'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../../styles/ForeignAccount.module.css'
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

export default function ForeignAccount() {
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
      <div id='body'>
        {/* ****************************** header start **************************************/}
        <header id='header' className={`${styles.header}`}>
          <nav className={`${styles.nav} ${styles.flexColumn}`}>
            <div className={`${styles.spaceBetween} ${styles.desktopNav}`}>
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
                  className={`${styles.flexRow} ${styles.alignCenter} ${styles.smallGap} ${styles.dropdown} `}
                >
                  <div
                    className={`${styles.dropBtn} ${styles.smallGap} ${styles.alignCenter}`}
                  >
                    <p className={styles.desktopServiceMenuServiceText}>
                      Services
                    </p>

                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`${styles.servicesIcon} ${styles.whiteColor}`}
                    />
                  </div>

                  <div className={styles.dropdownContent}>
                    <Link href='/'>
                      <p>Transfer Cash</p>
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
                    // id='navXIcon'
                    className={styles.navXicon}
                    onClick={handleNavXIcon}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faBars}
                    // id='navBarIcon'
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
                  <li className={`${styles.mobileMenuBlogText}`}>Blog</li>
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
                  5X faster to open a foreign account than it is anywhere else
                </p>
                <p className={styles.headerSubText}>
                  Own a foreign account in minutes. One that gives you REAL
                  control of YOUR money.
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

            <div className={`${styles.headerBottom} ${styles.justifyCenter}`}>
              <Image
                src='/Images/foreignAcctHeaderImg.svg'
                width={50}
                height={50}
                className={styles.foreignAcctHeaderImg}
              />
            </div>
          </div>
        </header>
        {/* ********************* header end ************************************************* */}

        {/* ****************** section one start ******************************************/}
        <section
          className={`${styles.sectionOne} ${styles.flexColumn}  ${styles.alignCenter}`}
        >
          <div className={`${styles.desktopSectionOnefiftyVw}`}>
            <div className={styles.sectionOneBox}>
              <div
                className={`${styles.flexColumn} ${styles.sectionOneBoxCard}`}
              >
                <Image
                  src='/Images/Image2.svg'
                  width={30}
                  height={30}
                  className={styles.sectionOneBoxCardIcon}
                />
                <p className={styles.transactionSuccesful}>
                  Transaction Successful 👍🏼
                </p>
                <p className={styles.sectionOneBoxCardP2}>
                  We have just sent your money to @deboy
                </p>
                <p className={styles.sectionOneBoxCardP3}>
                  Show transaction details
                </p>
              </div>

              <Image
                src='/Images/foreignSectionIcon1.svg'
                width={50}
                height={50}
                className={styles.foreignSectionIcon1}
              />

              <Image
                src='/Images/foreignSectionIcon3.svg'
                width={50}
                height={50}
                className={styles.foreignSectionIcon3}
              />

              <Image
                src='/Images/foreignSectionIcon4.svg'
                width={80}
                height={80}
                className={styles.foreignSectionIcon4}
              />

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
                        src='/Images/foreignSectionIcon2.svg'
                        width={13}
                        height={13}
                        className={styles.usaFlag}
                      />
                      <p className={styles.usdText}>USD</p>
                    </div>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={styles.ngnIcon}
                    />
                  </div>
                </div>
              </div>

              <div>
                <p className={styles.recipientEmailText}>
                  Recipient Email or User ID
                </p>
                <div className={styles.enterEmail}>
                  <p className={styles.enterEmailText}>
                    Enter recipient email or username
                  </p>
                </div>
              </div>

              <button
                className={`${styles.nextButton} ${styles.justifyCenter}`}
              >
                <p>Next</p>
              </button>
            </div>
          </div>

          <div
            className={`${styles.sectionOneDesc} ${styles.flexColumn} ${styles.desktopSectionOnefiftyVw}`}
          >
            <p
              className={`${styles.sectionOneDescBoldText} ${styles.blackColor}`}
            >
              Send and Receive Money Overseas Instantly
            </p>
            <p className={styles.sectionOneDescLightText}>
              Send, Receive funds and pay for your education abroad at once.
            </p>
          </div>

          <div
            className={`${styles.circleDesc} ${styles.flexColumn} ${styles.desktopSectionOnefiftyVw}`}
          >
            <p className={`${styles.circleDescBoldText} ${styles.blackColor}`}>
              Escape a black hole of fees and charges
            </p>
            <p className={styles.circleDescLightText}>
              An incredibly useful tool for your business and personal needs
              without running outrageous charges.
            </p>
          </div>

          <div
            className={`${styles.sendCashBox}  ${styles.desktopSectionOnefiftyVw}`}
          >
            <Image
              src='/Images/Line.png'
              width={50}
              height={50}
              className={styles.LineImg}
            />

            <Image
              src='/Images/feePercentage.svg'
              width={50}
              height={50}
              className={styles.feePercentage}
            />

            <div className={styles.sendCashBoxCard}>
              <p className={styles.sendCashText}>Send Cash</p>
              <div className={styles.sendCashAmountBox}>
                <p className={styles.sendCashAmountText}>Amount</p>
                <div className={`${styles.flexRow} ${styles.boxes}`}>
                  <div className={styles.sendCashCardAmountContainer}>
                    <p className={styles.sendCashAmountContainerFig}>₦5000</p>
                  </div>

                  <div
                    className={`${styles.sendCashCardNgnBox} ${styles.alignCenter} ${styles.spaceBetween}`}
                  >
                    <div className={`${styles.flexRow} ${styles.alignCenter}`}>
                      <Image
                        src='/Images/foreignSectionIcon2.svg'
                        width={13}
                        height={13}
                        className={styles.usaFlag}
                      />
                      <p className={styles.usdText}>USD</p>
                    </div>

                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={styles.ngnIcon}
                    />
                  </div>
                </div>
              </div>

              <p className={styles.sendCashBoxCardP1}>@deboy</p>
              <p className={styles.sendCashBoxCardfig}>$56,000</p>
              <p className={styles.sendCashBoxCardP2}>Amount Received</p>
            </div>

            <p className={styles.sendCashText}>Send Cash</p>

            <div className={styles.sendCashAmountBox}>
              <p className={styles.amountText}>Amount</p>
              <div className={`${styles.flexRow} ${styles.boxes}`}>
                <div className={styles.sendCashAmountContainer}>
                  <p className={styles.amountContainerFig}>₦5000</p>
                </div>

                <div
                  className={`${styles.sendCashNgnBox} ${styles.alignCenter} ${styles.spaceBetween}`}
                >
                  <div className={`${styles.flexRow} ${styles.alignCenter}`}>
                    <Image
                      src='/Images/foreignSectionIcon2.svg'
                      width={13}
                      height={13}
                      className={styles.usaFlag}
                    />
                    <p className={styles.usdText}>USD</p>
                  </div>

                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={styles.ngnIcon}
                  />
                </div>
              </div>
            </div>

            <div>
              <p className={styles.recipientEmailText}>
                Recipient Email or User ID
              </p>
              <div className={styles.enterEmail}>
                <p className={styles.enterEmailText}>
                  Enter recipient email or username
                </p>
              </div>
            </div>

            <button
              className={`${styles.sendCashNextButton} ${styles.justifyCenter}`}
            >
              <p>Send</p>
            </button>
          </div>

          <div className={`${styles.container3}`}>
            <Image
              src='/Images/sectionOneAmount.svg'
              width={50}
              height={50}
              className={styles.container3Img}
            />
          </div>

          <div
            className={`${styles.container3Desc} ${styles.flexColumn} ${styles.desktopSectionOnefiftyVw}`}
          >
            <p
              className={`${styles.container3DescBoldText} ${styles.blackColor}`}
            >
              Pay for goods & services in your choice currency.
            </p>
            <p className={styles.container3DescLightText}>
              You can Shop, pay for Ads and lots more in whatever currency you
              choose.
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
                className={`${styles.flexColumn} ${styles.smallGap} ${styles.desktopSectionTwoBottomFlexColumnTexts} `}
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

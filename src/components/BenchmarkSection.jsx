import React, { useState } from 'react';
import './BenchmarkSection.css';

const BenchmarkSection = () => {
  const [activeTab, setActiveTab] = useState('flutter');
  const [expandedPrompts, setExpandedPrompts] = useState({});

  // GitHub SVG Icon Component
  const GitHubIcon = () => (
    <svg width="16" height="16" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.7567 0C5.95895 0 0.453125 5.50583 0.453125 12.3035C0.453125 17.7478 3.97501 22.3463 8.86566 23.9765C9.48084 24.0842 9.71153 23.715 9.71153 23.3921C9.71153 23.0999 9.69615 22.131 9.69615 21.1005C6.60489 21.6696 5.80516 20.347 5.55909 19.6549C5.42067 19.3012 4.82088 18.2092 4.29798 17.917C3.86735 17.6863 3.25218 17.1173 4.2826 17.1019C5.2515 17.0865 5.94357 17.9939 6.17427 18.363C7.28158 20.2239 9.05022 19.701 9.75767 19.3781C9.86532 18.5783 10.1883 18.04 10.542 17.7325C7.80448 17.4249 4.94391 16.3637 4.94391 11.6576C4.94391 10.3196 5.42067 9.21227 6.20502 8.35102C6.08199 8.04343 5.65137 6.78232 6.32806 5.09058C6.32806 5.09058 7.35848 4.76762 9.71153 6.3517C10.6958 6.07487 11.7416 5.93645 12.7874 5.93645C13.8332 5.93645 14.879 6.07487 15.8633 6.3517C18.2163 4.75224 19.2468 5.09058 19.2468 5.09058C19.9235 6.78232 19.4928 8.04343 19.3698 8.35102C20.1542 9.21227 20.6309 10.3042 20.6309 11.6576C20.6309 16.3791 17.755 17.4249 15.0174 17.7325C15.4634 18.1169 15.8479 18.8552 15.8479 20.0086C15.8479 21.6542 15.8325 22.9768 15.8325 23.3921C15.8325 23.715 16.0632 24.0995 16.6784 23.9765C19.121 23.1521 21.2435 21.5824 22.7472 19.4884C24.2508 17.3944 25.0598 14.8815 25.0602 12.3035C25.0602 5.50583 19.5544 0 12.7567 0Z" fill="currentColor"/>
    </svg>
  );

  // Flutter SVG Icon Component
  const FlutterIcon = () => (
    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.308594 12.0375L12.3086 0H19.6961L4.02109 15.675L0.308594 12.0375ZM12.3086 24H19.6961L13.3023 17.6063L19.6961 11.0812H12.3086L5.91484 17.5312L12.3086 24Z" fill="url(#paint0_linear_2076_24795)"/>
      <defs>
        <linearGradient id="paint0_linear_2076_24795" x1="10.0023" y1="0" x2="10.0023" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6DBDF5"/>
          <stop offset="1" stopColor="#69C2DF"/>
        </linearGradient>
      </defs>
    </svg>
  );

  // Kotlin SVG Icon Component
  const KotlinIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_297_12947)">
        <path d="M1.08375 20L10.5013 10.4169L20 20H1.08375ZM0 0H10L0 10.4169V0ZM11.1656 0L0 11.6669V20L20 0H11.1656Z" fill="#3B424A"/>
      </g>
      <defs>
        <clipPath id="clip0_297_12947">
          <rect width="20" height="20" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );

  // React Native SVG Icon Component
  const ReactNativeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.7056 14.3916C12.8417 14.3916 13.7627 13.4706 13.7627 12.3345C13.7627 11.1983 12.8417 10.2773 11.7056 10.2773C10.5694 10.2773 9.64844 11.1983 9.64844 12.3345C9.64844 13.4706 10.5694 14.3916 11.7056 14.3916Z" fill="#61DAFB"/>
      <path d="M11.7062 16.5503C17.8024 16.5503 22.7444 14.6633 22.7444 12.3357C22.7444 10.008 17.8024 8.12109 11.7062 8.12109C5.60994 8.12109 0.667969 10.008 0.667969 12.3357C0.667969 14.6633 5.60994 16.5503 11.7062 16.5503Z" stroke="#61DAFB" strokeWidth="1.16667"/>
      <path d="M8.05516 14.4419C11.1033 19.7214 15.2084 23.0578 17.2242 21.894C19.24 20.7302 18.4032 15.5068 15.355 10.2273C12.3069 4.94784 8.2018 1.61144 6.186 2.77526C4.17019 3.93909 5.00704 9.16243 8.05516 14.4419Z" stroke="#61DAFB" strokeWidth="1.16667"/>
      <path d="M8.05601 10.2237C5.0079 15.5032 4.17104 20.7265 6.18685 21.8904C8.20266 23.0542 12.3078 19.7178 15.3559 14.4383C18.404 9.15878 19.2409 3.93544 17.2251 2.77161C15.2093 1.60778 11.1041 4.94419 8.05601 10.2237Z" stroke="#61DAFB" strokeWidth="1.16667"/>
    </svg>
  );

  // Mock data for different tech stacks
  const techStacks = [
    { id: 'flutter', name: 'Flutter Mobile', icon: <FlutterIcon />, active: true },
    { id: 'react-native', name: 'React Native', icon: <ReactNativeIcon />, active: false, comingSoon: true },
    { id: 'kotlin', name: 'Kotlin Android', icon: <KotlinIcon />, active: false, comingSoon: true }
  ];

  // Real data from CSV
  const flutterData = [
    {
      id: 'ZULIP-1779',
      repo: 'zulip/zulip-flutter',
      repoName: 'zulip-flutter',
      repoOrg: 'zulip',
      repoLogo: <GitHubIcon />,
      repoUrl: 'https://github.com/zulip/zulip-flutter',
      issueUrl: 'https://github.com/zulip/zulip-flutter/issues/1779',
      issueTitle: 'Account selection for content sharing',
      issueNature: 'Feature Request',
      specialty: 'Multi-account Management',
      inputPrompt: 'Currently if a user has multiple accounts added and tries to share content from other apps, the sharing page of the first account will be opened unconditionally. We should instead provide a way to select an account and then show the sharing page of the selected account.',
      dashwavePR: {
        url: '',
        status: 'failed',
        quality: 'N/A',
        responseTime: 'N/A'
      },
      julesPR: {
        url: '',
        status: 'failed',
        quality: 'N/A',
        responseTime: 'N/A'
      },
      humanPR: {
        url: 'https://github.com/zulip/zulip-flutter/pull/1816',
        status: 'merged',
        quality: '9.2/10',
        responseTime: '4.5h'
      }
    },
    {
      id: 'ZULIP-1641',
      repo: 'zulip/zulip-flutter',
      repoName: 'zulip-flutter',
      repoOrg: 'zulip',
      repoLogo: <GitHubIcon />,
      repoUrl: 'https://github.com/zulip/zulip-flutter',
      issueUrl: 'https://github.com/zulip/zulip-flutter/issues/1641',
      issueTitle: 'Hide mark unread button for unsubscribed channels',
      issueNature: 'Bug Fix',
      specialty: 'UI/UX Design',
      inputPrompt: 'Messages in unsubscribed channels can\'t be unread, so we shouldn\'t offer the "mark unread" button on message-list pages for a channel or topic narrow where the channel is unsubscribed.',
      dashwavePR: {
        url: 'https://github.com/dashwave-test/zulip-flutter/pull/9',
        status: 'merged',
        quality: '8.5/10',
        responseTime: '2.1h'
      },
      julesPR: {
        url: 'https://github.com/dashwave-test/zulip-flutter/pull/8',
        status: 'merged',
        quality: '8.1/10',
        responseTime: '3.2h'
      },
      humanPR: {
        url: 'https://github.com/zulip/zulip-flutter/pull/1758',
        status: 'merged',
        quality: '9.0/10',
        responseTime: '6.2h'
      }
    },
    {
      id: 'ZULIP-1651',
      repo: 'zulip/zulip-flutter',
      repoName: 'zulip-flutter',
      repoOrg: 'zulip',
      repoLogo: <GitHubIcon />,
      repoUrl: 'https://github.com/zulip/zulip-flutter',
      issueUrl: 'https://github.com/zulip/zulip-flutter/issues/1651',
      issueTitle: 'Hide compose box for unsubscribed private channels',
      issueNature: 'Bug Fix',
      specialty: 'Access Control',
      inputPrompt: 'Currently, if you view a private channel you\'re not subscribed to, we show the compose box and let you tap "Send", which just gives you a server error. Instead, we should hide the compose box, like we do for other narrows you\'re not allowed to post in.',
      dashwavePR: {
        url: 'https://github.com/dashwave-test/zulip-flutter/pull/11',
        status: 'merged',
        quality: '8.9/10',
        responseTime: '1.8h'
      },
      julesPR: {
        url: 'https://github.com/dashwave-test/zulip-flutter/pull/10',
        status: 'merged',
        quality: '8.3/10',
        responseTime: '2.9h'
      },
      humanPR: {
        url: 'https://github.com/zulip/zulip-flutter/pull/1652',
        status: 'merged',
        quality: '9.1/10',
        responseTime: '5.5h'
      }
    },
    {
      id: 'SECURE-900',
      repo: 'juliansteenbakker/flutter_secure_storage',
      repoName: 'flutter_secure_storage',
      repoOrg: 'juliansteenbakker',
      repoLogo: <GitHubIcon />,
      repoUrl: 'https://github.com/juliansteenbakker/flutter_secure_storage',
      issueUrl: 'https://github.com/juliansteenbakker/flutter_secure_storage/issues/900',
      issueTitle: 'Android keystore operation failed on POS device',
      issueNature: 'Bug Fix',
      specialty: 'Platform Integration',
      inputPrompt: 'EncryptedSharedPreferences initialization failed with Keystore operation failed on Android 10 POS device. Need to handle keystore exceptions and provide fallback mechanisms.',
      dashwavePR: {
        url: 'https://github.com/dashwave-test/flutter_secure_storage/pull/2',
        status: 'merged',
        quality: '8.7/10',
        responseTime: '3.5h'
      },
      julesPR: {
        url: 'https://github.com/juliansteenbakker/flutter_secure_storage/pull/975',
        status: 'merged',
        quality: '8.2/10',
        responseTime: '4.1h'
      },
      humanPR: {
        url: 'https://github.com/juliansteenbakker/flutter_secure_storage/pull/946',
        status: 'merged',
        quality: '9.3/10',
        responseTime: '8.0h'
      }
    },
    {
      id: 'SECURE-866',
      repo: 'juliansteenbakker/flutter_secure_storage',
      repoName: 'flutter_secure_storage',
      repoOrg: 'juliansteenbakker',
      repoLogo: <GitHubIcon />,
      repoUrl: 'https://github.com/juliansteenbakker/flutter_secure_storage',
      issueUrl: 'https://github.com/juliansteenbakker/flutter_secure_storage/issues/866',
      issueTitle: 'Darwin implementation incorrectly adds isSynchronizable',
      issueNature: 'Bug Fix',
      specialty: 'iOS Integration',
      inputPrompt: 'Darwin impl incorrectly adds isSynchronizable = true to some queries. This will add synchronizable to a query that shouldn\'t have it (specifically one with a group, per validateQueryParameters).',
      dashwavePR: {
        url: 'https://github.com/dashwave-test/flutter_secure_storage/pull/3',
        status: 'merged',
        quality: '8.4/10',
        responseTime: '2.7h'
      },
      julesPR: {
        url: 'https://github.com/dashwave-test/flutter_secure_storage/pull/1',
        status: 'merged',
        quality: '7.8/10',
        responseTime: '3.8h'
      },
      humanPR: {
        url: 'https://github.com/juliansteenbakker/flutter_secure_storage/pull/868',
        status: 'merged',
        quality: '9.0/10',
        responseTime: '6.5h'
      }
    },
    {
      id: 'ARKIT-223',
      repo: 'olexale/arkit_flutter_plugin',
      repoName: 'arkit_flutter_plugin',
      repoOrg: 'olexale',
      repoLogo: <GitHubIcon />,
      repoUrl: 'https://github.com/olexale/arkit_flutter_plugin',
      issueUrl: 'https://github.com/olexale/arkit_flutter_plugin/issues/223',
      issueTitle: 'ARKItGltfNode name always returns Sketchfab_model',
      issueNature: 'Bug Fix',
      specialty: 'AR/VR Development',
      inputPrompt: 'When using ARKitGltfNode to show custom nodes from .glb files, the name value is always the same: Sketchfab_model. Need to differentiate nodes to show additional UI with text related to them.',
      dashwavePR: {
        url: 'https://github.com/dashwave-test/arkit_flutter_plugin/pull/2',
        status: 'merged',
        quality: '8.6/10',
        responseTime: '2.9h'
      },
      julesPR: {
        url: 'https://github.com/dashwave-test/arkit_flutter_plugin/pull/1',
        status: 'merged',
        quality: '8.0/10',
        responseTime: '3.5h'
      },
      humanPR: {
        url: 'https://github.com/olexale/arkit_flutter_plugin/pull/242',
        status: 'merged',
        quality: '9.2/10',
        responseTime: '7.2h'
      }
    },
    {
      id: 'FILEPICKER-1858',
      repo: 'miguelpruivo/flutter_file_picker',
      repoName: 'flutter_file_picker',
      repoOrg: 'miguelpruivo',
      repoLogo: <GitHubIcon />,
      repoUrl: 'https://github.com/miguelpruivo/flutter_file_picker',
      issueUrl: 'https://github.com/miguelpruivo/flutter_file_picker/issues/1858',
      issueTitle: 'Web file picker cancelled by Chrome Enterprise extensions',
      issueNature: 'Bug Fix',
      specialty: 'Web Integration',
      inputPrompt: 'There is an issue in file picker web that could be resolved by introducing a configuration parameter. When Chrome Enterprise extensions scan selected files, the window loses focus and cancels the upload.',
      dashwavePR: {
        url: 'https://github.com/dashwave-test/flutter_file_picker/pull/2',
        status: 'merged',
        quality: '8.8/10',
        responseTime: '2.3h'
      },
      julesPR: {
        url: '',
        status: 'failed',
        quality: 'N/A',
        responseTime: 'N/A'
      },
      humanPR: {
        url: 'https://github.com/miguelpruivo/flutter_file_picker/pull/1859',
        status: 'merged',
        quality: '9.1/10',
        responseTime: '5.8h'
      }
    },
    {
      id: 'FILEPICKER-1636',
      repo: 'miguelpruivo/flutter_file_picker',
      repoName: 'flutter_file_picker',
      repoOrg: 'miguelpruivo',
      repoLogo: <GitHubIcon />,
      repoUrl: 'https://github.com/miguelpruivo/flutter_file_picker',
      issueUrl: 'https://github.com/miguelpruivo/flutter_file_picker/issues/1636',
      issueTitle: 'saveFileDialog returns incorrect path on Android',
      issueNature: 'Bug Fix',
      specialty: 'Platform Integration',
      inputPrompt: 'saveFileDialog returns a file path pointing to the download folder regardless of the directory picked by the user. This creates incompatibility between Android and Desktop platforms.',
      dashwavePR: {
        url: 'https://github.com/dashwave-test/flutter_file_picker/pull/3',
        status: 'merged',
        quality: '8.3/10',
        responseTime: '3.1h'
      },
      julesPR: {
        url: 'https://github.com/dashwave-test/flutter_file_picker/pull/1',
        status: 'merged',
        quality: '7.9/10',
        responseTime: '4.2h'
      },
      humanPR: {
        url: 'https://github.com/miguelpruivo/flutter_file_picker/pull/1712',
        status: 'merged',
        quality: '9.0/10',
        responseTime: '8.5h'
      }
    },
    {
      id: 'BLOC-4490',
      repo: 'felangel/bloc',
      repoName: 'bloc',
      repoOrg: 'felangel',
      repoLogo: <GitHubIcon />,
      repoUrl: 'https://github.com/felangel/bloc',
      issueUrl: 'https://github.com/felangel/bloc/issues/4490',
      issueTitle: 'Add warning for emit across async gaps without isClosed check',
      issueNature: 'Feature Request',
      specialty: 'Developer Experience',
      inputPrompt: 'As a developer I want to see a warning if I\'m using emit across async gaps without checking whether the instance isClosed. Similar to use_build_context_synchronously lint rule.',
      dashwavePR: {
        url: 'https://github.com/dashwave-test/bloc/pull/3',
        status: 'merged',
        quality: '8.9/10',
        responseTime: '2.5h'
      },
      julesPR: {
        url: 'https://github.com/dashwave-test/bloc/pull/1',
        status: 'merged',
        quality: '8.2/10',
        responseTime: '3.7h'
      },
      humanPR: {
        url: 'https://github.com/felangel/bloc/pull/4585',
        status: 'merged',
        quality: '9.3/10',
        responseTime: '6.8h'
      }
    },
    {
      id: 'BLOC-4456',
      repo: 'felangel/bloc',
      repoName: 'bloc',
      repoOrg: 'felangel',
      repoLogo: <GitHubIcon />,
      repoUrl: 'https://github.com/felangel/bloc',
      issueUrl: 'https://github.com/felangel/bloc/issues/4456',
      issueTitle: 'Add warning for not using context extensions',
      issueNature: 'Feature Request',
      specialty: 'Developer Experience',
      inputPrompt: 'As a developer, I want to be warned if I am not using context extensions (e.g. context.read, context.watch) to encourage better practices.',
      dashwavePR: {
        url: 'https://github.com/dashwave-test/bloc/pull/4',
        status: 'merged',
        quality: '8.7/10',
        responseTime: '2.8h'
      },
      julesPR: {
        url: 'https://github.com/dashwave-test/bloc/pull/2',
        status: 'merged',
        quality: '8.0/10',
        responseTime: '3.4h'
      },
      humanPR: {
        url: 'https://github.com/felangel/bloc/pull/4562',
        status: 'merged',
        quality: '9.1/10',
        responseTime: '7.1h'
      }
    },
    {
      id: 'SPINKIT-131',
      repo: 'jogboms/flutter_spinkit',
      repoName: 'flutter_spinkit',
      repoOrg: 'jogboms',
      repoLogo: <GitHubIcon />,
      repoUrl: 'https://github.com/jogboms/flutter_spinkit',
      issueUrl: 'https://github.com/jogboms/flutter_spinkit/issues/131',
      issueTitle: 'Build failed: withValues method not defined for Color class',
      issueNature: 'Bug Fix',
      specialty: 'Flutter Compatibility',
      inputPrompt: 'Build Failed by version 5.2.2: The method \'withValues\' isn\'t defined for the class \'Color\' in flutter_spinkit-5.2.2/lib/src/double_bounce.dart(77,34). Flutter version: 3.19.6',
      dashwavePR: {
        url: 'https://github.com/dashwave-test/flutter_spinkit/pull/2',
        status: 'merged',
        quality: '8.5/10',
        responseTime: '2.0h'
      },
      julesPR: {
        url: 'https://github.com/dashwave-test/flutter_spinkit/pull/1',
        status: 'merged',
        quality: '8.1/10',
        responseTime: '2.8h'
      },
      humanPR: {
        url: 'https://github.com/jogboms/flutter_spinkit/pull/132',
        status: 'merged',
        quality: '9.0/10',
        responseTime: '4.2h'
      }
    },
    {
      id: 'SPOTUBE-2344',
      repo: 'KRTirtho/spotube',
      repoName: 'spotube',
      repoOrg: 'KRTirtho',
      repoLogo: <GitHubIcon />,
      repoUrl: 'https://github.com/KRTirtho/spotube',
      issueUrl: 'https://github.com/KRTirtho/spotube/issues/2344',
      issueTitle: 'Bottom overflow in Browse & Local Library on Desktop',
      issueNature: 'Bug Fix',
      specialty: 'UI/UX Design',
      inputPrompt: 'In the desktop version, some cards in Browse and Local Library have a bottom overflow issue. Text should either fade out if it overflows the available space or scroll horizontally/vertically if the content is too large.',
      dashwavePR: {
        url: 'https://github.com/dashwave-test/spotube/pull/3',
        status: 'merged',
        quality: '8.6/10',
        responseTime: '2.4h'
      },
      julesPR: {
        url: 'https://github.com/dashwave-test/spotube/pull/1',
        status: 'merged',
        quality: '8.0/10',
        responseTime: '3.1h'
      },
      humanPR: {
        url: 'https://github.com/KRTirtho/spotube/pull/2349',
        status: 'merged',
        quality: '9.2/10',
        responseTime: '6.5h'
      }
    },
    {
      id: 'SPOTUBE-2250',
      repo: 'KRTirtho/spotube',
      repoName: 'spotube',
      repoOrg: 'KRTirtho',
      repoLogo: <GitHubIcon />,
      repoUrl: 'https://github.com/KRTirtho/spotube',
      issueUrl: 'https://github.com/KRTirtho/spotube/issues/2250',
      issueTitle: 'Improve build documentation for Arch Linux',
      issueNature: 'Documentation',
      specialty: 'Developer Experience',
      inputPrompt: 'Building spotube using Arch Linux native dart and flutter builds is problematic. Strongly suggest using fvm in the docs, add an "install fvm" step and prepend all "dart" and "flutter" commands with "fvm dart" and "fvm flutter".',
      dashwavePR: {
        url: 'https://github.com/dashwave-test/spotube/pull/4',
        status: 'merged',
        quality: '8.8/10',
        responseTime: '1.9h'
      },
      julesPR: {
        url: 'https://github.com/dashwave-test/spotube/pull/2',
        status: 'merged',
        quality: '8.2/10',
        responseTime: '2.7h'
      },
      humanPR: {
        url: 'https://github.com/KRTirtho/spotube/pull/2254',
        status: 'merged',
        quality: '9.1/10',
        responseTime: '5.3h'
      }
    },
    {
      id: 'LICHESS-28',
      repo: 'lichess-org/mobile',
      repoName: 'mobile',
      repoOrg: 'lichess-org',
      repoLogo: <GitHubIcon />,
      repoUrl: 'https://github.com/lichess-org/mobile',
      issueUrl: 'https://github.com/lichess-org/mobile/issues/28',
      issueTitle: 'Implement non-visual board for accessibility',
      issueNature: 'Feature Request',
      specialty: 'Accessibility',
      inputPrompt: 'A non visual board to allow blind people to move pieces on a chessboard. This should be done by a widget which should replace automatically GameBoardLayout if navigation by screen reader is detected in the current context.',
      dashwavePR: {
        url: 'https://github.com/dashwave-test/lichess-mobile/pull/2',
        status: 'merged',
        quality: '8.9/10',
        responseTime: '4.2h'
      },
      julesPR: {
        url: 'https://github.com/dashwave-test/lichess/pull/1',
        status: 'merged',
        quality: '8.3/10',
        responseTime: '5.1h'
      },
      humanPR: {
        url: 'https://github.com/lichess-org/mobile/pull/1594',
        status: 'merged',
        quality: '9.4/10',
        responseTime: '12.0h'
      }
    },
    {
      id: 'LICHESS-201',
      repo: 'lichess-org/mobile',
      repoName: 'mobile',
      repoOrg: 'lichess-org',
      repoLogo: <GitHubIcon />,
      repoUrl: 'https://github.com/lichess-org/mobile',
      issueUrl: 'https://github.com/lichess-org/mobile/issues/201',
      issueTitle: 'Improve error handling for connectivity issues',
      issueNature: 'Bug Fix',
      specialty: 'Error Handling',
      inputPrompt: 'Currently the app shows error messages when the device does not have connectivity. We can improve this by showing a general message like on the home page or we could disable refresh to not reload the providers at all.',
      dashwavePR: {
        url: 'https://github.com/dashwave-test/lichess-mobile/pull/1',
        status: 'merged',
        quality: '8.4/10',
        responseTime: '2.6h'
      },
      julesPR: {
        url: 'https://github.com/dashwave-test/lichess/pull/2',
        status: 'merged',
        quality: '7.9/10',
        responseTime: '3.3h'
      },
      humanPR: {
        url: 'https://github.com/lichess-org/mobile/pull/226',
        status: 'merged',
        quality: '9.0/10',
        responseTime: '6.8h'
      }
    }
  ];

  const getTableData = () => {
    switch (activeTab) {
      case 'flutter':
        return flutterData;
      case 'react-native':
        return []; // Placeholder for React Native data
      case 'kotlin':
        return []; // Placeholder for Kotlin data
      default:
        return flutterData;
    }
  };

  const getStatusBadge = (status) => {
    // Convert status to simplified format
    const simplifiedStatus = status === 'merged' || status === 'open' ? 'completed' : 'failed';
    const statusClass = simplifiedStatus === 'completed' ? 'success' : 'danger';
    return <span className={`badge badge-${statusClass}`}>{simplifiedStatus}</span>;
  };

  const togglePromptExpansion = (issueId) => {
    setExpandedPrompts(prev => ({
      ...prev,
      [issueId]: !prev[issueId]
    }));
  };

  const tableData = getTableData();

  return (
    <section id="benchmarks" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Benchmark Results</h2>
        </div>
        <div className="section-subtitle">
          Comparing AI agents on real-world GitHub issues through automated PR generation
        </div>

        {/* Tech Stack Tabs */}
        <div className="tech-stack-tabs">
          {techStacks.map((stack) => (
            <button
              key={stack.id}
              className={`tab-button ${activeTab === stack.id ? 'active' : ''} ${stack.comingSoon ? 'coming-soon' : ''}`}
              onClick={() => !stack.comingSoon && setActiveTab(stack.id)}
              disabled={stack.comingSoon}
              title={stack.comingSoon ? 'Coming Soon' : ''}
            >
              <span className="tab-icon">{stack.icon}</span>
              <span className="tab-name">{stack.name}</span>
              {stack.comingSoon && <span className="coming-soon-badge">Soon</span>}
            </button>
          ))}
        </div>

        {/* Benchmark Table */}
        <div className="benchmark-table-container">
          <div className="table-scroll-note">
            <p>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '6px', verticalAlign: 'middle' }}>
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Scroll sideways to see all columns
            </p>
          </div>
          <table className="benchmark-table">
            <thead>
              <tr>
                <th>Repository</th>
                <th>Issue</th>
                <th>Issue Nature</th>
                <th>Specialty</th>
                <th>Input Prompt</th>
                <th>Dashwave PR</th>
                <th>Google Jules PR</th>
                <th>Human PR (Reference)</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((issue) => (
                <tr key={issue.id}>
                  <td className="repo-cell">
                    <div className="repo-card">
                      <div className="repo-logo">
                        {issue.repoLogo}
                      </div>
                      <div className="repo-info">
                        <div className="repo-name">{issue.repoName}</div>
                        <a href={issue.repoUrl} target="_blank" rel="noopener noreferrer" className="repo-url">
                          {issue.repoUrl}
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="issue-cell">
                    <div className="issue-chip">
                      <div className="issue-header">
                        <span className="issue-icon">
                          <GitHubIcon />
                        </span>
                        <a href={issue.issueUrl} target="_blank" rel="noopener noreferrer">
                          {issue.issueTitle}
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="issue-nature">
                    <span className="nature-badge">{issue.issueNature}</span>
                  </td>
                  <td className="specialty">
                    {issue.specialty}
                  </td>
                  <td className="input-prompt">
                    <div className="prompt-container">
                      <div className="prompt-text" title={issue.inputPrompt}>
                        {expandedPrompts[issue.id] 
                          ? issue.inputPrompt 
                          : `${issue.inputPrompt.substring(0, 60)}...`}
                      </div>
                      {issue.inputPrompt.length > 60 && (
                        <button 
                          className="prompt-toggle"
                          onClick={() => togglePromptExpansion(issue.id)}
                        >
                          {expandedPrompts[issue.id] ? 'Show Less' : 'Show More'}
                        </button>
                      )}
                    </div>
                  </td>
                  <td className="pr-cell dashwave">
                    <div className="pr-info">
                      {issue.dashwavePR.url ? (
                        <a href={issue.dashwavePR.url} target="_blank" rel="noopener noreferrer">
                          View PR
                        </a>
                      ) : (
                        <span className="no-pr">No PR</span>
                      )}
                      {getStatusBadge(issue.dashwavePR.status)}
                      <div className="pr-metrics">
                        <span className="metric">Quality: {issue.dashwavePR.quality}</span>
                        {/* Time temporarily hidden */}
                        {/* <span className="metric">Time: {issue.dashwavePR.responseTime}</span> */}
                      </div>
                    </div>
                  </td>
                  <td className="pr-cell jules">
                    <div className="pr-info">
                      {issue.julesPR.url ? (
                        <a href={issue.julesPR.url} target="_blank" rel="noopener noreferrer">
                          View PR
                        </a>
                      ) : (
                        <span className="no-pr">No PR</span>
                      )}
                      {getStatusBadge(issue.julesPR.status)}
                      <div className="pr-metrics">
                        <span className="metric">Quality: {issue.julesPR.quality}</span>
                        {/* Time temporarily hidden */}
                        {/* <span className="metric">Time: {issue.julesPR.responseTime}</span> */}
                      </div>
                    </div>
                  </td>
                  <td className="pr-cell human">
                    <div className="pr-info">
                      <a href={issue.humanPR.url} target="_blank" rel="noopener noreferrer">
                        View PR
                      </a>
                      {getStatusBadge(issue.humanPR.status)}
                      <div className="pr-metrics">
                        <span className="metric">Quality: {issue.humanPR.quality}</span>
                        {/* Time removed from human PR */}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="benchmark-note">
          <p>
            <strong>Note:</strong> Scoring mechanism is currently under development. 
            These results represent preliminary data from our ongoing evaluation of AI agents 
            on real-world open source GitHub issues. Quality scores are based on code review feedback 
            and automated testing results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenchmarkSection;

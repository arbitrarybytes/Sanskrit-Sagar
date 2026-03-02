import Tag from './Tag.jsx';

/**
 * XP reward pill — shows "+N XP" in gold styling.
 */
const XPPill = ({ amount, th }) => (
    <Tag color={th.gold} bg={th.goldLow}>
        +{amount} XP
    </Tag>
);

export default XPPill;
